"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var festivals = [
            { id: 1, name: 'Boomtown' },
            { id: 2, name: 'Shambala' },
            { id: 3, name: 'Green Man' },
            { id: 4, name: 'Bestival' },
            { id: 5, name: 'Secret Garden Party' },
            { id: 6, name: 'The Masked Ball' },
            { id: 7, name: 'Gottwood' },
            { id: 8, name: 'Burning Man' },
            { id: 9, name: 'Creamfields' },
            { id: 10, name: 'The Social' }
        ];
        return { festivals: festivals };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map