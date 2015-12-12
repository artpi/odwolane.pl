

function template( str, data ) {
    for( key in data ) {
        str = str.replace( new RegExp( '{' + key + '}', 'g' ), data[key] );
    }
    return str;
}

function getPayload() {
    return JSON.parse( atob( document.location.hash.substring( 1 ) ) );
}

function form() {
    'use strict';
    var selectedDocument;

    document.querySelector('#documentTypes').addEventListener('change', function (event) {
        selectedDocument = event.target.selectedOptions[0].value;
    });

    document.querySelector('#action').addEventListener('click', function () {
        var payload = {
            what: document.querySelector('#what').value,
            to_whom: document.querySelector('#to_whom').value
        };
        
        document.location.href = 'pisma/' + selectedDocument + '/#' + btoa( JSON.stringify( payload ) );
    });

}

