function DocumentPrototype( title, html ) {
    this.title = title || 'Dowolne pismo';
    this.html = html || '<h2>Tutaj będzie geenrowany do druku dokument. Trzeba dorobić templatkowanie</h2>';
}

DocumentPrototype.generate = function () {
    //TODO: templatkowanie
    return this.html;
}


function boot() {
    var documentTypes = [],
        options = '',
        configSelect,
        selectedDocument;

    configSelect = document.querySelector( '#documentTypes' );
    documentTypes.push( new Kempa() );

window.d = documentTypes;
    for (var i = 0; i < documentTypes.length; i++) {
        options += '<option value="' + i + '">' + documentTypes[i].title + '</option>';
    }
    configSelect.innerHTML += options;

    configSelect.addEventListener( 'change', function( event ) {
        var html,
            index = event.target.selectedOptions[0].value;
        //TODO: dodawanie szczegolow
        
        selectedDocument = documentTypes[ index ];

    } );

    document.querySelector( '#action' ).addEventListener( 'click', function( event ) {
        showDocument( selectedDocument.generate() );
    });

}

function showDocument( text ) {
    document.querySelector( '#content' ).innerHTML = text;
}
