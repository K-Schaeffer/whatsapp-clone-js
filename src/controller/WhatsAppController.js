/**
 * CLASS PURPOSE: Deal with the intelligence of the project
 * DEVELOPER: Kauan Schaeffer, HCODE Instructors
 */
class WhatsAppController {

    constructor() {

        console.log('Working');

        this.elementsPrototype();
        this.loadElements();

    }

    // Add customized prototypes to elements
    elementsPrototype() {

        // Visibility prototypes
        Element.prototype.hide = function () {
            this.style.display = 'none';
            return this;
        }

        Element.prototype.show = function () {
            this.style.display = 'block';
            return this;
        }

        Element.prototype.toggle = function () {
            this.style.display = (this.style.display === 'none') ? 'block' : 'none';
            return this;
        }

        // Event prototype
        Element.prototype.on = function (events, fn) {
            events.split(' ').forEach(event => {
                this.addEventListener(event, fn);
            });
            return this;
        }

        // CSS prototypes
        Element.prototype.css = function (styles) {
            for (let name in styles) {
                this.style[name] = styles[name];
            }
            return this;
        }

        Element.prototype.addClass = function (name) {
            this.classList.add(name);
            return this;
        }

        Element.prototype.removeClass = function (name) {
            this.classList.remove(name);
            return this;
        }

        Element.prototype.toggleClass = function (name) {
            this.classList.toggle(name);
            return this;
        }

        Element.prototype.hasClass = function (name) {
            return this.classList.contains(name);
        }
    }

    // Load all id's from HTML and create a object with each id
    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.toCamelCase(element.id)] = element;

        });
    }



}