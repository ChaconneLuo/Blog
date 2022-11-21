"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArticleModule = void 0;
var common_1 = require("@nestjs/common");
var article_controller_1 = require("./article.controller");
var article_services_1 = require("./article.services");
var article_entity_1 = require("./article.entity");
var typeorm_1 = require("@nestjs/typeorm");
var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([article_entity_1.Article])],
            controllers: [article_controller_1.ArticleController],
            providers: [article_services_1.ArticleServices]
        })
    ], ArticleModule);
    return ArticleModule;
}());
exports.ArticleModule = ArticleModule;
