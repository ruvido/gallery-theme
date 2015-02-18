$('.content').each(function() {
    var a = $(this);
    
    var repl = a.html(a.html().replace( /\[\[triplet/ig  , "<section class=triplet>" ));    
    
    var repl = a.html(a.html().replace( "[[card" , "<section class=card>" ));    
    var repl = a.html(a.html().replace( /\[\[bio/ig  , "<section class=bio>" ));    
    
    var repl = a.html(a.html().replace( "[[church" , "<section class=church>" ));
    var repl = a.html(a.html().replace( "[[date"   , "<section class=date>" ));
    var repl = a.html(a.html().replace( "[[time"   , "<section class=time>" ));
    
    var repl = a.html(a.html().replace( "[[dual"   , "<section class=dual>" ));

    
    var repl = a.html(a.html().replace( /\[\[name/ig    , "<section class=name>" ));
    var repl = a.html(a.html().replace( /\[\[phone/ig   , "<section class=phone>" ));
    var repl = a.html(a.html().replace( /\[\[email/ig   , "<section class=email>" ));
    var repl = a.html(a.html().replace( /\[\[address/ig , "<section class=address>" ));
    
    var closeb = /]]/ig;
    var repl = a.html(a.html().replace( closeb , "</section>" ));
});
