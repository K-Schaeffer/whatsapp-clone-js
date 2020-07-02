/**
 * CLASS PURPOSE: Deal with the intelligence of the project
 * DEVELOPER: Kauan Schaeffer, HCODE Instructors
 */
class WhatsAppController {

    constructor(){

        console.log('Working');

        this.loadElements();
        

    }

    // Load all id's from HTML and create a object with each id
    loadElements(){

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.toCamelCase(element.id)] = element;
            
        });

    }

}