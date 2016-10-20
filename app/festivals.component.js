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
var festival_service_1 = require("./festival.service");
var FestivalsComponent = (function () {
    function FestivalsComponent(festivalService) {
        this.festivalService = festivalService;
        this.title = 'Tour of Festivals';
    }
    FestivalsComponent.prototype.getFestivals = function () {
        var _this = this;
        this.festivalService.getFestivals().then(function (festivals) { return _this.festivals = festivals; });
    };
    FestivalsComponent.prototype.ngOnInit = function () {
        this.getFestivals();
    };
    FestivalsComponent.prototype.onSelect = function (festival) {
        this.selectedFestival = festival;
    };
    return FestivalsComponent;
}());
FestivalsComponent = __decorate([
    core_1.Component({
        selector: 'my-festivals',
        template: "\n    <h2>My Festivals</h2>\n    <ul class=\"festivals\">\n      <li *ngFor=\"let festival of festivals\"\n        [class.selected]=\"festival === selectedFestival\"\n        (click)=\"onSelect(festival)\">\n        <span class=\"badge\">{{festival.id}}</span> {{festival.name}}\n      </li>\n    </ul>\n    <my-festival-detail [festival]=\"selectedFestival\"></my-festival-detail>\n    ",
        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .festivals {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .festivals li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .festivals li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .festivals li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .festivals .text {\n        position: relative;\n        top: -3px;\n      }\n      .festivals .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "],
        providers: [festival_service_1.FestivalService]
    }),
    __metadata("design:paramtypes", [festival_service_1.FestivalService])
], FestivalsComponent);
exports.FestivalsComponent = FestivalsComponent;
//# sourceMappingURL=festivals.component.js.map