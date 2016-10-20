"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FestivalService = (function () {
    function FestivalService(http) {
        this.http = http;
        this.festivalsUrl = 'app/festivals';
    }
    FestivalService.prototype.getFestivals = function () {
        return this.http.get(this.festivalsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FestivalService.prototype.getFestivalssSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getFestivals(); });
    };
    FestivalService.prototype.getFestival = function (id) {
        return this.getFestivals()
            .then(function (festivals) { return festivals.find(function (festival) { return festival.id === id; }); });
    };
    return FestivalService;
}());
FestivalService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FestivalService);
exports.FestivalService = FestivalService;
//# sourceMappingURL=festival.service.js.map