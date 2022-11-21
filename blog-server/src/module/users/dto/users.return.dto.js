"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersReturnDto = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var UsersReturnDto = /** @class */ (function () {
    function UsersReturnDto() {
    }
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], UsersReturnDto.prototype, "firstName");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], UsersReturnDto.prototype, "lastName");
    __decorate([
        (0, typeorm_1.Column)({
            unique: true
        }),
        (0, class_validator_1.IsEmail)()
    ], UsersReturnDto.prototype, "email");
    UsersReturnDto = __decorate([
        (0, typeorm_1.Entity)()
    ], UsersReturnDto);
    return UsersReturnDto;
}());
exports.UsersReturnDto = UsersReturnDto;
