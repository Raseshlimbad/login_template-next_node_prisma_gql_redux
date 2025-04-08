"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureApp = configureApp;
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_middleware_1 = require("../middleware/auth.middleware");
function configureApp() {
    const app = (0, express_1.default)();
    const corsOptions = {
        origin: "http://localhost:3000",
        credentials: true,
    };
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)(corsOptions));
    app.use(auth_middleware_1.sessionMiddleware);
    return app;
}
//# sourceMappingURL=app.config.js.map