"use strict";
exports.__esModule = true;
exports.CollectTFromR = void 0;
var ts_transformer_keys_1 = require("ts-transformer-keys");
var CollectTFromR = function (r) {
    var obj = Object.create(null);
    console.log((0, ts_transformer_keys_1.keys)());
    // for (let key of ) {
    //   Reflect.set(obj, key, Reflect.get(r as object, key));
    // }
    return obj;
};
exports.CollectTFromR = CollectTFromR;
