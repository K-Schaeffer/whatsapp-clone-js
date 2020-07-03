/**
 * CLASS PURPOSE: Format text, number, currency
 * DEVELOPER: Kauan Schaeffer, HCODE Instructors
 */
class Format {

    // Format the id's to CamelCase
    static toCamelCase(text) {

        // Mandatory div so I can create the dataset
        let div = document.createElement('div');
        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];

    }


}