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
var router_1 = require('@angular/router');
var festival_service_1 = require('./festival.service');
var FestivalsComponent = (function () {
    function FestivalsComponent(router, festivalService) {
        this.router = router;
        this.festivalService = festivalService;
    }
    FestivalsComponent.prototype.getFestivals = function () {
        var _this = this;
        this.festivalService.getFestivals().then(function (festivals) { return _this.festivals = festivals; });
    };
    FestivalsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.festivalService.create(name)
            .then(function (festival) {
            _this.festivals.push(festival);
            _this.selectedFestival = null;
        });
    };
    FestivalsComponent.prototype.delete = function (festival) {
        var _this = this;
        this.festivalService
            .delete(festival.id)
            .then(function () {
            _this.festivals = _this.festivals.filter(function (f) { return f !== festival; });
            if (_this.selectedFestival === festival) {
                _this.selectedFestival = null;
            }
        });
    };
    FestivalsComponent.prototype.ngOnInit = function () {
        this.getFestivals();
    };
    FestivalsComponent.prototype.onSelect = function (festival) {
        this.selectedFestival = festival;
    };
    FestivalsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedFestival.id]);
    };
    FestivalsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-festivals',
            templateUrl: 'festivals.component.html',
            styleUrls: ['festivals.component.css'],
            providers: [festival_service_1.FestivalService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, festival_service_1.FestivalService])
    ], FestivalsComponent);
    return FestivalsComponent;
}());
exports.FestivalsComponent = FestivalsComponent;
//# sourceMappingURL=festivals.component.js.map