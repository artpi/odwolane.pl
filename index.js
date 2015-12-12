function DocumentPrototype(title, html) {
    'use strict';
    this.title = title || 'Dowolne pismo';
    this.html = html || '<h2>Tutaj będzie geenrowany do druku dokument. Trzeba dorobić templatkowanie</h2>';
}

DocumentPrototype.generate = function (replace) {
    'use strict';
    var result = this.html;
    return result.replace('<%what%>', replace.what).replace('<%to_whom%>', replace.to_whom);
};


function showDocument(text) {
    'use strict';
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#pismo').innerHTML = text;
}


function boot() {
    'use strict';
    var i,
        documentTypes = [],
        options = '',
        configSelect,
        selectedDocument;

    configSelect = document.querySelector('#documentTypes');
    documentTypes.push(new Kempa());

    for (i = 0; i < documentTypes.length; i += 1) {
        options += '<option value="' + i + '">' + documentTypes[i].title + '</option>';
    }

    configSelect.innerHTML += options;
    configSelect.addEventListener('change', function (event) {
        var index = event.target.selectedOptions[0].value;
        // TODO: dodawanie szczegolow
        selectedDocument = documentTypes[index];
    });

    document.querySelector('#action').addEventListener('click', function () {
        showDocument(selectedDocument.generate({
            what: document.querySelector('#what').value || '..........................................',
            to_whom: document.querySelector('#to_whom').value
        }));
    });

}


