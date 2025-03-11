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
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '/**', credentials: true }));
const port = process.env.PORT;
function main() {
    const uri = process.env.DB_URL;
    const client = new mongodb_1.MongoClient(uri, {
        serverApi: {
            version: mongodb_1.ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    function run() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Connect the client to the server	(optional starting in v4.7)
                yield client.connect();
                // Send a ping to confirm a successful connection
                yield client.db("portfolio").command({ ping: 1 });
                console.log("Pinged your deployment. You successfully connected to MongoDB!");
                // root route
                app.get('/', (req, res) => {
                    res.json('portfolio server running...');
                });
                //register user 
                app.get('/test', () => { return; }, (req, res) => __awaiter(this, void 0, void 0, function* () {
                    res.json('test successfull');
                }));
                // listening app on port 
                app.listen(port, () => {
                    console.log(`portfolio server listening on port ${port}`);
                });
            }
            catch (error) {
                throw new Error((error === null || error === void 0 ? void 0 : error.message) || 'server error');
            }
            finally {
                // Ensures that the client will close when you finish/error
                yield client.close();
            }
        });
    }
    run().catch(console.dir);
}
main();
