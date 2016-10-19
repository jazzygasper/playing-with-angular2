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
var Festival = (function () {
    function Festival() {
    }
    return Festival;
}());
exports.Festival = Festival;
var FESTIVAL = [
    { id: 11, name: 'Boomtown' },
    { id: 12, name: 'Shambala' },
    { id: 13, name: 'Green Man' },
    { id: 14, name: 'Secret Garden Party' },
    { id: 15, name: 'Bestival' },
    { id: 16, name: 'The Masked Ball' },
    { id: 17, name: 'Gottwood' },
    { id: 18, name: 'Burning Man' },
    { id: 19, name: 'Creamfields' },
    { id: 20, name: 'The Social' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Festivals';
        this.festivals = FESTIVAL;
    }
    AppComponent.prototype.onSelect = function (festival) {
        this.selectedFestival = festival;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>My Festivals</h2>\n    <ul class=\"festivals\">\n      <li *ngFor=\"let festival of festivals\"\n        [class.selected]=\"festival === selectedFestival\"\n        (click)=\"onSelect(festival)\">\n        <span class=\"badge\">{{festival.id}}</span> {{festival.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedFestival\">\n      <h2>{{selectedFestival.name}} details!</h2>\n      <div><label>id: </label>{{selectedFestival.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedFestival.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n    ",
        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .festivals {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .festivals li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .festivals li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .festivals li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .festivals .text {\n        position: relative;\n        top: -3px;\n      }\n      .festivals .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map