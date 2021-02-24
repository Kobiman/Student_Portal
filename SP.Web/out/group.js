export class _ {
    static groupBy(array, f) {
        var groups = {};
        array.forEach(function (o) {
            var group = JSON.stringify(f(o));
            groups[group] = groups[group] || [];
            groups[group].push(o);
        });
        return groups;
    }
    static getElementByAttribute(element, attr) {
        let result = null;
        element.querySelectorAll("[binding]").forEach(function (elem) {
            var attribute = elem.getAttribute("binding");
            if (attribute === attr) {
                result = elem;
                return;
            }
        });
        return result;
    }
    static formatDate(dateObj) {
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        return day + "-" + month + "-" + year;
    }
    ;
}
//# sourceMappingURL=group.js.map