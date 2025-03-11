import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv';
import { Server } from 'http';
// define the main function for run this application server
dotenv.config();
let server: Server;
async function main() {
    try {
        // connect mongodb atlas using moonges connect method.

        await mongoose.connect(process.env.DB_URL as string);

        server = app.listen(process.env.PORT, () => {
            console.log(
                `car_store app server running ${process.env.MODE} mood on port: ${process.env.PORT}`,
            );
        });
    } catch (err) {
        console.log(err);
    }
}

main();
process.on('unhandledRejection', () => {
    console.log(`unhandledRejection is detected,🤢 server is shutting down`);
    if (server) {
        server.close(() => {
            process.exit(1)
        })
    }
})

process.on('uncaughtException', () => {
    console.log(`uncaughtException is detected,🤢 server is shutting down`);
    process.exit();

})