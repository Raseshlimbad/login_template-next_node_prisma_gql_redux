"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_config_1 = require("./config/app.config");
const apollo_config_1 = require("./config/apollo.config");
dotenv_1.default.config();
// const prisma = new PrismaClient();
const port = process.env.PORT || 8001;
const app = (0, app_config_1.configureApp)();
const server = (0, apollo_config_1.createApolloServer)();
const serverStart = () => __awaiter(void 0, void 0, void 0, function* () {
    yield server.start();
    server.applyMiddleware({
        app: app,
        path: "/graphql",
        cors: false,
    });
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
    });
});
serverStart().catch((err) => {
    console.error(`Server error: ${err}`);
});
