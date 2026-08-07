/* A year is often all anyone knows.

   people.birth_date and death_date are real DATE columns, so "1897" or
   "1897-1964" - which is what a family member actually types - is rejected by
   Postgres with 22007, and the keeper's approval failed silently. Leon chose
   (2026-08-06) to keep the date column and record how much of it is real, in
   birth_precision / death_precision: day | month | year | circa.

   parse() returns {date, precision, note} or null when it cannot honestly tell.
   It never guesses a day it was not given: a year becomes the 1st of January
   with precision 'year', and display() puts "1897" back on the screen. */
(function(){
  if(window.LFDate) return;

  var MONTHS={jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
  function pad(n){ return (n<10?'0':'')+n; }
  function iso(y,m,d){ return y+'-'+pad(m||1)+'-'+pad(d||1); }
  function yearOK(y){ return y>=1000 && y<=2200; }

  function parse(raw){
    if(raw===null||raw===undefined) return null;
    var s=String(raw).trim(); if(!s) return null;
    var circa=false;
    /* "c. 1897", "ca 1897", "~1897", "about 1897", "около 1897", "בערך 1897" */
    if(/^(c\.?|ca\.?|circa|about|around|approx\.?|~|около|прибл\.?|בערך)\s*/i.test(s)){
      circa=true; s=s.replace(/^(c\.?|ca\.?|circa|about|around|approx\.?|~|около|прибл\.?|בערך)\s*/i,'').trim();
    }
    var m;
    /* a full date: 1897-03-12 */
    if((m=s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/))){
      var y=+m[1],mo=+m[2],d=+m[3];
      if(!yearOK(y)||mo<1||mo>12||d<1||d>31) return null;
      return {date:iso(y,mo,d), precision:circa?'circa':'day'};
    }
    /* 12/03/1897 or 12.03.1897 - ambiguous order, so only the year is honest */
    if((m=s.match(/^\d{1,2}[./]\d{1,2}[./](\d{4})$/))){
      return yearOK(+m[1])?{date:iso(+m[1],1,1), precision:'year',
        note:'day and month dropped: order was ambiguous'}:null;
    }
    /* a month and a year: 1897-03, March 1897, 03/1897 */
    if((m=s.match(/^(\d{4})-(\d{1,2})$/))){
      return (yearOK(+m[1])&&+m[2]>=1&&+m[2]<=12)?{date:iso(+m[1],+m[2],1),precision:circa?'circa':'month'}:null;
    }
    if((m=s.match(/^([A-Za-z]{3,})\s+(\d{4})$/))){
      var mm=MONTHS[m[1].slice(0,3).toLowerCase()];
      return (mm&&yearOK(+m[2]))?{date:iso(+m[2],mm,1),precision:circa?'circa':'month'}:null;
    }
    /* a lifespan in one field: 1897-1964. The first year is this person's, the
       second belongs to the other end of their life - reported, never guessed at. */
    if((m=s.match(/^(\d{4})\s*[-–—]\s*(\d{4})$/))){
      if(!yearOK(+m[1])) return null;
      return {date:iso(+m[1],1,1), precision:'year', other:+m[2],
              note:'looks like a lifespan; kept the first year only'};
    }
    /* a bare year */
    if((m=s.match(/^(\d{4})$/))){
      return yearOK(+m[1])?{date:iso(+m[1],1,1), precision:circa?'circa':'year'}:null;
    }
    return null;   /* say nothing rather than write a date nobody meant */
  }

  /* Give back what the family would recognise, not what the column holds. */
  var MON={en:['January','February','March','April','May','June','July','August','September','October','November','December'],
           ru:['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
           he:['בינואר','בפברואר','במרץ','באפריל','במאי','ביוני','ביולי','באוגוסט','בספטמבר','באוקטובר','בנובמבר','בדצמבר']};
  var CIRCA={en:'c. ', ru:'ок. ', he:'בערך '};
  function display(date, precision, lang){
    if(!date) return '';
    var p=String(date).slice(0,10).split('-'), y=p[0], mo=+p[1], d=+p[2];
    lang=(MON[lang]?lang:'en');
    var pre=(precision==='circa')?(CIRCA[lang]||CIRCA.en):'';
    if(precision==='year'||precision==='circa') return pre+y;
    if(precision==='month') return pre+MON[lang][mo-1]+' '+y;
    if(lang==='en') return pre+MON.en[mo-1]+' '+d+', '+y;
    if(lang==='ru') return pre+d+' '+MON.ru[mo-1]+' '+y;
    return pre+d+' '+MON.he[mo-1]+' '+y;
  }

  window.LFDate={ parse:parse, display:display };
})();
