"use strict";
/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTinymce = void 0;
var getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };
var getTinymce = function (version) {
    var global = getGlobal();
    if (version === '5') {
        return global ? global.tinymce5 : null;
    }
    return global ? global.tinymce : null;
};
exports.getTinymce = getTinymce;
