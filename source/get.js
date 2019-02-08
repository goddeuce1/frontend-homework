"use strict";

const get = (object = undefined, string = ".") => {

    if (!string.localeCompare("")) {
        return;
    }

    const stringArray = string.split('.');

    for (let i = 1; i < stringArray.length; ++i) {

        if (!(stringArray[i].localeCompare(""))) {
            return object;
        }

        if (!(object.hasOwnProperty(stringArray[i]))) {
            return;
        }

        object = object[stringArray[i]];

    }
    return object;
}

