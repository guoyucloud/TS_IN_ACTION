"use strict";
var Type;
(function (Type) {
    Type[Type["Strong"] = 0] = "Strong";
    Type[Type["Week"] = 1] = "Week";
})(Type || (Type = {}));
class Java {
    helloJava() {
        console.log('Hello Java');
    }
}
class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript');
    }
}
function getLanguage(type) {
    let lang = type === Type.Strong ? new Java() : new JavaScript();
    if (lang.helloJava) {
        lang.helloJava();
    }
    return lang;
}
getLanguage(Type.Strong);
