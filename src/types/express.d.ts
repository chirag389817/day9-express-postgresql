import { UserInterface } from "./user";

declare global {
    namespace Express {
        interface Request {
            user?: UserInterface;
        }
    }
}

export {};
