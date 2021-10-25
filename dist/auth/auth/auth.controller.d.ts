import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): {
        token: string;
    };
    test(req: any): any;
}
