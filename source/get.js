"use strict";

let get = (object, string) => {
    if (!string.localeCompare("")) {
        return;
    }
    const stringArray = string.split('.');
    for (let i = 1; i < stringArray.length; ++i) {
        if (stringArray[i].localeCompare("")) {
            if (object.hasOwnProperty(stringArray[i])) {
                object = object[stringArray[i]];
            } else {
                return;
            }
        } else {
            return object;
        }
    }
    return object;
}
