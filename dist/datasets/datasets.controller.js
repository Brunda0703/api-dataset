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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetsController = void 0;
const common_1 = require("@nestjs/common");
const datasets_service_1 = require("./datasets.service");
let DatasetsController = class DatasetsController {
    constructor(datasetsService) {
        this.datasetsService = datasetsService;
    }
    async addDataset(databookname, dataauthor, datauserrating, datareview, dataprice, datagenre) {
        const generatedid = await this.datasetsService.insertDataset(databookname, dataauthor, datauserrating, datareview, dataprice, datagenre);
        console.log("generated", generatedid);
        return { id: generatedid };
    }
    async getAlldatas() {
        const datasets = await this.datasetsService.fetchdataset();
        return datasets;
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('BookName')),
    __param(1, common_1.Body('Author')),
    __param(2, common_1.Body('UserRating')),
    __param(3, common_1.Body('Reviews')),
    __param(4, common_1.Body('Price')),
    __param(5, common_1.Body('Genre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number, String]),
    __metadata("design:returntype", Promise)
], DatasetsController.prototype, "addDataset", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatasetsController.prototype, "getAlldatas", null);
DatasetsController = __decorate([
    common_1.Controller('datasets'),
    __metadata("design:paramtypes", [datasets_service_1.DatasetService])
], DatasetsController);
exports.DatasetsController = DatasetsController;
//# sourceMappingURL=datasets.controller.js.map