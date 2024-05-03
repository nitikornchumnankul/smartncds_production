"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const food_entity_1 = require("./food.entity");
const food_service_1 = require("./food.service");
const food_controller_1 = require("./food.controller");
const encryption_decryption_service_1 = require("../common/encryption-decryption.service");
const common_module_1 = require("../common/common.module");
const jwt_1 = require("@nestjs/jwt");
let FoodModule = class FoodModule {
};
exports.FoodModule = FoodModule;
exports.FoodModule = FoodModule = __decorate([
    (0, common_1.Module)({
        imports: [common_module_1.CommonModule, typeorm_1.TypeOrmModule.forFeature([food_entity_1.Food])],
        exports: [typeorm_1.TypeOrmModule, food_service_1.FoodService],
        providers: [food_service_1.FoodService, jwt_1.JwtService, encryption_decryption_service_1.EncryptAndDecryptService],
        controllers: [food_controller_1.FoodController],
    })
], FoodModule);
//# sourceMappingURL=food.module.js.map