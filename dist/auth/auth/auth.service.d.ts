import { JwtService } from '@nestjs/jwt';
declare enum Roles {
    ADMIN = "admin",
    USER = "user",
    OUTRO = "outro"
}
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(username: string, password: string): string;
    validateCredentials(username: string, password: string): {
        id: number;
        username: string;
        password: string;
        role: Roles;
    };
}
export {};
