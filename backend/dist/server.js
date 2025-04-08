"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_config_1 = require("./config/app.config");
const apollo_config_1 = require("./config/apollo.config");
dotenv_1.default.config();
const port = process.env.PORT || 8001;
const app = (0, app_config_1.configureApp)();
const server = (0, apollo_config_1.createApolloServer)();
const serverStart = async () => {
    await server.start();
    server.applyMiddleware({
        app: app,
        path: "/graphql",
        cors: false,
    });
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}${server.graphqlPath}`);
    });
};
serverStart().catch((err) => {
    console.error(`Server error: ${err}`);
});
//# sourceMappingURL=server.js.map