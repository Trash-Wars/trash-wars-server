"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const uri = process.env.URI;
console.log(uri);
mongoose_1.default.connect(uri);
app.use(express_1.default.json());
app.use("/api/scores", routes_1.default);
app.get("/", (req, res) => {
    res.send("hello world this is a test");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
