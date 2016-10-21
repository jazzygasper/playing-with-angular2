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
var common_1 = require('@angular/common');
var festival_service_1 = require('./festival.service');
var FestivalDetailComponent = (function () {
    function FestivalDetailComponent(festivalService, route, location) {
        this.festivalService = festivalService;
        this.route = route;
        this.location = location;
    }
    FestivalDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.festivalService.getFestival(id)
                .then(function (festival) { return _this.festival = festival; });
        });
    };
    FestivalDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    FestivalDetailComponent.prototype.save = function () {
        var _this = this;
        this.festivalService.update(this.festival)
            .then(function () { return _this.goBack(); });
    };
    FestivalDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-festival-detail',
            templateUrl: 'festival-detail.component.html',
            styleUrls: ['festival-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [festival_service_1.FestivalService, router_1.ActivatedRoute, common_1.Location])
    ], FestivalDetailComponent);
    return FestivalDetailComponent;
}());
exports.FestivalDetailComponent = FestivalDetailComponent;
//# sourceMappingURL=festival-detail.component.js.map