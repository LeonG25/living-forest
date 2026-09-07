/* LF-TONGUE — a language has one name per reader, not one per typist.
   Leon, 2026-09-07: Jonny's Hebrew page listed his tongues as «Английский», «Иврит»,
   «Русский» — Russian words on a Hebrew page, because a spoken language was stored as
   whatever text the contributor typed. The stored word is now treated as a KEY: it is
   recognised in any of the three tongues (and by its own native name) and shown in the
   reader's. A word nobody recognises is shown exactly as it was typed — the forest never
   discards what a person wrote. */
(function(){
  if(window.LFTongue) return;
  var L=[
    ['English','Английский','אנגלית','english,английский,англ,אנגלית'],
    ['Russian','Русский','רוסית','russian,русский,рус,רוסית'],
    ['Hebrew','Иврит','עברית','hebrew,иврит,עברית,ivrit'],
    ['Yiddish','Идиш','יידיש','yiddish,идиш,יידיש,אידיש'],
    ['Ukrainian','Украинский','אוקראינית','ukrainian,украинский,укр,אוקראינית'],
    ['Polish','Польский','פולנית','polish,польский,polski,פולנית'],
    ['German','Немецкий','גרמנית','german,немецкий,deutsch,גרמנית'],
    ['French','Французский','צרפתית','french,французский,français,צרפתית'],
    ['Spanish','Испанский','ספרדית','spanish,испанский,español,ספרדית'],
    ['Italian','Итальянский','איטלקית','italian,итальянский,italiano,איטלקית'],
    ['Arabic','Арабский','ערבית','arabic,арабский,ערבית'],
    ['Romanian','Румынский','רומנית','romanian,румынский,română,רומנית'],
    ['Hungarian','Венгерский','הונגרית','hungarian,венгерский,magyar,הונגרית'],
    ['Czech','Чешский','צ׳כית','czech,чешский,čeština,צ׳כית'],
    ['Belarusian','Белорусский','בלארוסית','belarusian,белорусский,беларуская,בלארוסית'],
    ['Moldovan','Молдавский','מולדובית','moldovan,молдавский,מולדובית'],
    ['Lithuanian','Литовский','ליטאית','lithuanian,литовский,ליטאית'],
    ['Latvian','Латышский','לטבית','latvian,латышский,לטבית'],
    ['Georgian','Грузинский','גאורגית','georgian,грузинский,גאורגית'],
    ['Armenian','Армянский','ארמנית','armenian,армянский,ארמנית'],
    ['Azerbaijani','Азербайджанский','אזרית','azerbaijani,азербайджанский,אזרית'],
    ['Uzbek','Узбекский','אוזבקית','uzbek,узбекский,אוזבקית'],
    ['Kazakh','Казахский','קזחית','kazakh,казахский,קזחית'],
    ['Turkish','Турецкий','טורקית','turkish,турецкий,türkçe,טורקית'],
    ['Greek','Греческий','יוונית','greek,греческий,יוונית'],
    ['Dutch','Голландский','הולנדית','dutch,голландский,nederlands,הולנדית'],
    ['Portuguese','Португальский','פורטוגזית','portuguese,португальский,português,פורטוגזית'],
    ['Swedish','Шведский','שוודית','swedish,шведский,svenska,שוודית'],
    ['Norwegian','Норвежский','נורווגית','norwegian,норвежский,נורווגית'],
    ['Danish','Датский','דנית','danish,датский,dansk,דנית'],
    ['Finnish','Финский','פינית','finnish,финский,suomi,פינית'],
    ['Bulgarian','Болгарский','בולגרית','bulgarian,болгарский,български,בולגרית'],
    ['Serbian','Сербский','סרבית','serbian,сербский,српски,סרבית'],
    ['Croatian','Хорватский','קרואטית','croatian,хорватский,hrvatski,קרואטית'],
    ['Slovak','Словацкий','סלובקית','slovak,словацкий,slovenčina,סלובקית'],
    ['Persian','Персидский','פרסית','persian,персидский,farsi,פרסית'],
    ['Ladino','Ладино','לדינו','ladino,ладино,לדינו'],
    ['Aramaic','Арамейский','ארמית','aramaic,арамейский,ארמית'],
    ['Chinese','Китайский','סינית','chinese,китайский,סינית'],
    ['Japanese','Японский','יפנית','japanese,японский,יפנית']
  ];
  var IDX={};
  L.forEach(function(row,i){
    row[3].split(',').forEach(function(a){ IDX[a.trim().toLowerCase()]=i; });
    IDX[row[0].toLowerCase()]=i; IDX[row[1].toLowerCase()]=i; IDX[row[2].toLowerCase()]=i;
  });
  function col(lang){ return lang==='ru'?1:(lang==='he'?2:0); }
  function name(v,lang){
    var t=String(v||'').trim(); if(!t) return t;
    var i=IDX[t.toLowerCase()];
    return (i===undefined) ? t : L[i][col(lang)];
  }
  function list(lang){ var c=col(lang); return L.map(function(r){ return r[c]; }); }
  window.LFTongue={ name:name, list:list };
})();
