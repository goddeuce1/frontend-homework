"use strict";

const get = function(object, string) {
    if (!string.localeCompare(".")) {
        return object;
    }
    const stringArray = string.split('.');
    for (let i = 1; i < stringArray.length; ++i) {
        if (object[stringArray[i]] === undefined) {
            return undefined;
        } else if (!isNaN(stringArray[i])) {
            object = object[parseInt(stringArray[i], 10)];
        } else if (!stringArray[i].localeCompare("length") && i == stringArray.length - 1) {
            return object.length;
        } else {
            object = object[stringArray[i]];
        }
    }
    return object;
}
