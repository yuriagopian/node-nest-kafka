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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["USER"] = "user";
    Roles["OUTRO"] = "outro";
})(Roles || (Roles = {}));
const users = [
    {
        id: 1,
        username: 'yuri@hotmail.com',
        password: '$2b$10$5X0FNdzZK/DYJ/RZ3WqGUueCwyMMVR0OvY8mB5sHerSwpwvXx3QOm',
        role: Roles.ADMIN,
    },
    {
        id: 2,
        username: 'yuri1@hotmail.com',
        password: '$2b$10$5X0FNdzZK/DYJ/RZ3WqGUueCwyMMVR0OvY8mB5sHerSwpwvXx3QOm',
        role: Roles.USER,
    },
    {
        id: 3,
        username: 'yuri2@hotmail.com',
        password: '$$2b$10$5X0FNdzZK/DYJ/RZ3WqGUueCwyMMVR0OvY8mB5sHerSwpwvXx3QOm',
        role: Roles.USER,
    },
];
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    login(username, password) {
        const user = this.validateCredentials(username, password);
        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role,
        };
        return this.jwtService.sign(payload);
    }
    validateCredentials(username, password) {
        const user = users.find((user) => {
            return (user.username === username &&
                bcrypt.compareSync(password, user.password));
        });
        if (!user) {
            throw new Error('User Not found');
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map