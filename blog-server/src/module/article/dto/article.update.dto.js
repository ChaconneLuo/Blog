"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleUpdateDto = void 0;
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var ArticleUpdateDto = /** @class */ (function () {
    function ArticleUpdateDto() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        (0, class_validator_1.IsNumber)()
    ], ArticleUpdateDto.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], ArticleUpdateDto.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], ArticleUpdateDto.prototype, "subTitle");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], ArticleUpdateDto.prototype, "articleContent");
    __decorate([
        (0, typeorm_1.Column)(),
        (0, class_validator_1.IsString)()
    ], ArticleUpdateDto.prototype, "articleIntroduce");
    __decorate([
        (0, typeorm_1.Column)({
            "default": '{}'
        }),
        (0, class_validator_1.IsString)()
    ], ArticleUpdateDto.prototype, "tags");
    ArticleUpdateDto = __decorate([
        (0, typeorm_1.Entity)()
    ], ArticleUpdateDto);
    return ArticleUpdateDto;
}());
exports.ArticleUpdateDto = ArticleUpdateDto;