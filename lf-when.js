/* When something happened - as much of it as anyone actually knows.

   "When" was a free text box: a contributor could type anything, and the app had no way to
   understand it later. Three dropdowns instead - year, month, day - every one of them
   optional, because a family often knows the year and nothing more. The day list follows
   the month and the year, so 29 February exists in 2024 and not in 2025, and an impossible
   date cannot be chosen rather than being caught afterwards.

   What comes out matches what the database already stores: a real date plus how much of it
   is true (day | month | year), the same vocabulary lf-date.js parses and displays.

     LFWhen.mount(el, {value, precision, lang, onchange})
     LFWhen.read(el) -> {date:'1953-04-00'|null, precision:'day'|'month'|'year'|null, text}
*/
(function(){
  if(window.LFWhen) return;

  var MONTHS={
    en:['January','February','March','April','May','June','July','August','September','October','November','December'],
    ru:['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь'],
    he:['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר']
  };
  var LAB={ en:{y:'Year',m:'Month',d:'Day',any:'—'},
            ru:{y:'Год',m:'Месяц',d:'День',any:'—'},
            he:{y:'שנה',m:'חודש',d:'יום',any:'—'} };

  function daysIn(y,m){
    if(!m) return 31;
    if(m===2){ if(!y) return 29; return ((y%4===0&&y%100!==0)||y%400===0)?29:28; }
    return [31,28,31,30,31,30,31,31,30,31,30,31][m-1];
  }
  function opt(v,t,sel){ return '<option value="'+v+'"'+(String(sel)===String(v)?' selected':'')+'>'+t+'</option>'; }

  function mount(el, o){
    o=o||{}; var lang=(MONTHS[o.lang]?o.lang:'en'), L=LAB[lang]||LAB.en, mn=MONTHS[lang];
    var y='', m='', d='';
    if(o.value){ var p=String(o.value).slice(0,10).split('-');
      y=+p[0]||''; m=+p[1]||''; d=+p[2]||'';
      if(o.precision==='year'){ m=''; d=''; }
      if(o.precision==='month'){ d=''; }
    }
    var now=new Date().getFullYear();
    function draw(){
      var ys=opt('',L.any,y);
      for(var i=now;i>=1830;i--) ys+=opt(i,i,y);
      var ms=opt('',L.any,m);
      for(var k=1;k<=12;k++) ms+=opt(k,mn[k-1],m);
      var ds=opt('',L.any,d), max=daysIn(+y||0,+m||0);
      for(var j=1;j<=max;j++) ds+=opt(j,j,d);
      el.innerHTML =
        '<div class="lfwhen" style="display:flex;gap:8px;flex-wrap:wrap">'
        + '<label style="flex:1 1 92px;min-width:92px"><span style="display:block;font-size:11px;letter-spacing:.08em;opacity:.7;margin-bottom:4px">'+L.y+'</span>'
        +   '<select data-w="y" style="width:100%">'+ys+'</select></label>'
        + '<label style="flex:1 1 110px;min-width:110px"><span style="display:block;font-size:11px;letter-spacing:.08em;opacity:.7;margin-bottom:4px">'+L.m+'</span>'
        +   '<select data-w="m"'+(y?'':' disabled')+' style="width:100%">'+ms+'</select></label>'
        + '<label style="flex:1 1 78px;min-width:78px"><span style="display:block;font-size:11px;letter-spacing:.08em;opacity:.7;margin-bottom:4px">'+L.d+'</span>'
        +   '<select data-w="d"'+(y&&m?'':' disabled')+' style="width:100%">'+ds+'</select></label>'
        + '</div>';
      el.querySelectorAll('select').forEach(function(s){
        s.onchange=function(){
          var w=s.getAttribute('data-w');
          if(w==='y'){ y=s.value; if(!y){ m=''; d=''; } }
          if(w==='m'){ m=s.value; if(!m) d=''; }
          if(w==='d'){ d=s.value; }
          /* a day that no longer exists in the chosen month simply falls away */
          if(d && +d>daysIn(+y||0,+m||0)) d='';
          draw();
          if(typeof o.onchange==='function') o.onchange(read(el));
        };
      });
    }
    el._lfwhen=function(){ return {y:y,m:m,d:d,lang:lang}; };
    draw();
    return read(el);
  }

  function read(el){
    var st=el&&el._lfwhen?el._lfwhen():null;
    if(!st||!st.y) return {date:null,precision:null,text:''};
    var y=+st.y, m=+st.m||0, d=+st.d||0;
    var pad=function(n){ return (n<10?'0':'')+n; };
    if(m && d) return {date:y+'-'+pad(m)+'-'+pad(d), precision:'day',
                       text:(MONTHS[st.lang]||MONTHS.en)[m-1]+' '+d+', '+y};
    if(m)      return {date:y+'-'+pad(m)+'-01', precision:'month',
                       text:(MONTHS[st.lang]||MONTHS.en)[m-1]+' '+y};
    return {date:y+'-01-01', precision:'year', text:String(y)};
  }

  window.LFWhen={ mount:mount, read:read, daysIn:daysIn };
})();
