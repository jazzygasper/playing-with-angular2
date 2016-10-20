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
var core_1 = require('@angular/core');
var mock_festivals_1 = require('./mock-festivals');
var FestivalService = (function () {
    function FestivalService() {
    }
    FestivalService.prototype.getFestivals = function () {
        return Promise.resolve(mock_festivals_1.FESTIVALS);
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
    FestivalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FestivalService);
    return FestivalService;
}());
exports.FestivalService = FestivalService;
//# sourceMappingURL=festival.service.js.map