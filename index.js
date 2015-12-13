

function template( str, data ) {
    for( key in data ) {
        str = str.replace( new RegExp( '{' + key + '}', 'g' ), unescape( data[key] ) );
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

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        var payload = {
            what: escape( document.querySelector('#what').value ),
            to_whom: escape( document.querySelector('#to_whom').value )
        };
        
        document.location.href = 'pisma/' + selectedDocument + '/#' + btoa( JSON.stringify( payload ) );
    });

    analytics();
}



function analytics() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-220058-13', 'auto');
    ga('send', 'pageview');
}