function Kempa() {
    var template,
        today = new Date(),
        before = new Date(),
        evenmorebefore = new Date(),
        sentence_id = String.fromCharCode(Math.floor(Math.random()*26+65)) + '/' + Math.floor(Math.random()*91+10) + '/' + Math.floor(Math.random()*91+10);

    Date.prototype.popolsku = function() {
        return this.toISOString().slice(0,10).replace(/-/g,".");
    };

    before.setDate(today.getDate()-3);
    evenmorebefore.setDate(before.getDate()-3);

    this.title = 'Orzeczenie trybunału konstytucyjnego';
    template = '<div id="wrap">\
            <div id="date">Warszawa, <%today%></div>\
            <div id="logo"><img src="pisma/kempa/orzelek.png" /><p>Kancelaria prezesa</br>rady ministrów</p></div><br style="clear:both" />\
            <div id="address"><p><%to_whom%></p></div><br style="clear:both" />\
        <p>W odpowiedzi na pismo z&nbsp;<%request_date%>&nbsp;r. w&nbsp;sprawie <b><%what%></b> uprzejmie przekazuję następujące stanowisko.</p>\
        <p>Zgodnie z&nbsp;art. 44&nbsp;ust. 1&nbsp;pkt 1&nbsp;lit. f&nbsp;ustawy z&nbsp;25 czerwca 2015&nbsp;r. o Trybunale Konstytuacyjnym (Dz.&nbsp;U.&nbsp;z&nbsp;2015 poz. 1064 z&nbsp;późn. zm.), Trybunał orzeka w&nbsp;pełnym składzie w&nbsp;sprawach "<i>o&nbsp;szczególnej zawiłości lub doniosłości</i>". Za taką sprawę uznany został wniosek grupy posłów dotyczących zgodności z&nbsp;Konstytucją ustawy o&nbsp;Trybunale Konstytucyjnym (sprawa <%sentence_id%>). W&nbsp;przedstawionym przez Pana Prezesa uzasadnieniu zarządzenia z&nbsp;18 listopada 2015&nbsp;r. o&nbsp;wyznaczeniu rozprawy, którego składu orzekającego był pan przewodniczącym, czytamy, że z&nbsp;tymi unormowaniami ustawowymi "<i>wiążą się doniosłe zagadnienia ustrojowe</i>".</p>\
        <p>Następnie, ze względu na wcześniejszą aktywność legislacyjną w&nbsp;sprawie ustawy o&nbsp;Trybunale Konstytucyjnym, trzech sędziów zostało wyłączonych z&nbsp;udziały w&nbsp;rozpoznawaniu sprawy, liczba sędziów zdolnych do orzekania spadła poniżej ustawowego minimum przewidzianego dla pełnego składu, tj. 9&nbsp;sędziów. Wówczac Trybunał podjął decyzję o&nbsp;zakwalifikowaniu sprawy do orzekania w&nbsp;składzie 5&nbsp;sędziów.</p>\
        <p>W&nbsp;zarządzeniu z&nbsp;1&nbsp;grudnia 2015&nbsp;r. wskazano: "<i>Do rozpoznania tego wniosku - zarządzeniem z&nbsp;18 listopada 2015&nbsp;r. - powołany został pełny skład Trybunału. Ze względu na upływ w&nbsp;dniu 6&nbsp;listopada 2015&nbsp;r. kadencji trojga sędziów Trybunału pełny skład liczy dwunastu sędziów Trybunału. Postanowieniem z&nbsp;30 listopada 2015&nbsp;r. Trybunał Konstytucyjny uwzględnił wnioski przedłożone Trybunałowi 25&nbsp;listopada 2015&nbsp;r. przez sędziów Andrzeja Rzeplińskiego, Stanisława Biernata i&nbsp;Piotra Tuleję i&nbsp;postanowił o&nbsp;ich wyłączeniu z&nbsp;udziału w rozpoznawaniu sprawy o&nbsp;sygn. <%sentence_id%>. W&nbsp;dniu 2&nbsp;grudnia 2015&nbsp;r. upływa kadencja sędziego Trybunału Zbigniewa Cieślaka, co powoduje, że skład orzekający Trybunału powołany do rozpoznania wniosku grupy posłów będzie liczył 8&nbsp;sędziów. Zgodnie zaś z&nbsp;art. 44&nbsp;ust. 3&nbsp;ustawy o&nbsp;TK orzekanie w&nbsp;pełnym składzie wymaga udziału co najmniej dziewięciu sędziów Trybunału\'. W&nbsp;związku z&nbsp;wyznaczoną na dzień 3&nbsp;grudnia 2015&nbsp;r. rozprawą w&nbsp;sprawie o&nbsp;sygn. <%sentence_id%>, a&nbsp;także z&nbsp;uwagi na konieczność niezwłocznego usunięcia przedstawionych we wniosku wątpliwości konstytucyjnych rozponanie sprawy powinno nastąpić w składzie pięciu sędziów Trybunału</i>."</p>\
        <p>Tego rodzaju przesłanka zmiany składu orzekającego nie jest znana ustawie o&nbsp;Trybunale Konstytucyjnym. Jak wskazano powyżej pełny katalog przesłanek upoważniajacych Trybunał do orzekania w&nbsp;pełnym składzie określa art.&nbsp;44 ust.&nbsp;1 pkt&nbsp;1 przedmiotowej ustawy.</p>\
        <p>Należy stwierdzić, że do wyznaczenia składu orzekającego w&nbsp;porzedmiotowej sprawie Trybunał zastosował pozaustawowe kryterium. Oznacza to, że Trybunał naruszył art. 7&nbsp;Konstytuacji RP. Skutkiem tego działania jest, w&nbsp;mojej ocenie, nieważność wyroku, bowiem zgodnie z&nbsp;art. 379 pkt&nbsp;4 kpc, w&nbsp;związku z&nbsp;art. 74 ustawy o&nbsp;Trybunale Konstytucyjnym, nieważność postępowania z&nbsp;mocy prawa zachodzi, "<i>jeżeli skład sądu orzekającego był sprzeczny z przepisami prawa (...)</i>".<p>\
        <p>Powyższe powoduje poważne wątpliwości co do możliwości publikacji w&nbsp;Dzienniku Ustaw RP przedmiotowego wyroku.</p>\
        <p>Przedstawiając powyższe uprzejmię proszę o zajęcie stanowiska w&nbsp;przedmiotowej sprawie. Jednocześnie informuję, że do tego czasu wstrzymuję publikację wyroku.</p>\
        <div id="sign"><p>Łączę wyrazy szacunku</p><img src="pisma/kempa/podpis.png" /></div>\
        <style>#wrap{width:80%;margin:5% auto;padding-bottom:50px}#date,#logo,#sign img{width:200px}#logo{float:left}#logo img{width:100px;padding:0 50px 10px}#logo p{font-family:Cinzel,serif;text-transform:uppercase;text-align:center}#date{float:right;text-align:right}#address{width:50%;float:right;font-weight:700;margin-top:100px;margin-bottom:50px;font-size:1.5em}#wrap>p{text-align:justify;line-height:160%;font-size:1.3em}#sign p{font-family:Allura,cursive;font-size:2em;text-align:right;margin-bottom:0}#sign img{float:right;margin:0 40px}#sign{margin-right:100px;}</style>';

    this.html = template.replace('<%today%>', today.popolsku()).
                    replace('<%request_date%>', before.popolsku()).
                    replace('<%sentence_date%>', evenmorebefore.popolsku()).
                    replace(/<%sentence_id%>/g, sentence_id);
}

Kempa.prototype = DocumentPrototype;
