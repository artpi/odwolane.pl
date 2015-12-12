function Kempa() {
    this.title = 'Orzeczenie trybunału konstytucyjnego';
    this.html = '<h1>Nagłówek</h1><p>Proszę o skasowanie <%what%>.<h2>Powód:</h2><%reason%>.<h3>Dziękuję</h3>';
}

Kempa.prototype = DocumentPrototype;
