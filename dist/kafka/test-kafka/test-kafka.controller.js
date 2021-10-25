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
exports.TestKafkaController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let TestKafkaController = class TestKafkaController {
    constructor(kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }
    consumer(message) {
        console.log(message.value);
    }
    producer(body) {
        this.kafkaProducer.send({
            topic: 'topico-exemplo',
            messages: [
                {
                    key: 'pagamento',
                    value: JSON.stringify(body),
                },
            ],
        });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('topico-exemplo'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestKafkaController.prototype, "consumer", null);
__decorate([
    (0, common_1.Post)('test-kafka'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TestKafkaController.prototype, "producer", null);
TestKafkaController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('KAFKA_PRODUCER')),
    __metadata("design:paramtypes", [Object])
], TestKafkaController);
exports.TestKafkaController = TestKafkaController;
//# sourceMappingURL=test-kafka.controller.js.map