import { App } from "./app";
export class ViewModelBase {
    constructor() {
        this.addPropertyChangeNotification = (object) => {
            var elements = [];
            elements = document.querySelectorAll('[binding]');
            elements.forEach(function (element) {
                if (element.type === 'text' || element.type === 'textarea') {
                    var propToBind = element.getAttribute('binding');
                    new Properties().addScopeProp(object, propToBind, elements);
                    element.onkeyup = function () {
                        object[propToBind] = element.value;
                    };
                }
            });
            return object;
        };
    }
    addEventListener(self, tag) {
        const elements = document.querySelectorAll(`[${tag}]`);
        elements.forEach(function (element) {
            element.addEventListener('click', (evt) => {
                evt.preventDefault();
                var route = element.getAttribute(tag);
                App.navigate(route);
            });
        });
    }
}
export class Properties {
    constructor() {
        this.addScopeProp = (object, prop, elements) => {
            if (!object.hasOwnProperty(prop)) {
                var value;
                Object.defineProperty(object, prop, {
                    set: function (newValue) {
                        value = newValue;
                        elements.forEach(function (element) {
                            if (element.getAttribute('binding') === prop) {
                                if (element.type && (element.type === 'text' || element.type === 'textarea')) {
                                    element.value = newValue;
                                }
                                else if (!element.type) {
                                    element.innerHTML = newValue;
                                }
                            }
                        });
                    },
                    get: function () {
                        return value;
                    },
                    enumerable: true
                });
            }
        };
    }
}
//# sourceMappingURL=viewModelBase.js.map