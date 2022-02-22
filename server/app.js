const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const chalk = require("chalk");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

const PORT = config.get("port") ?? 8080;

if (process.env.NODE_ENV === "production") {
    console.log(chalk.bgCyanBright("Production"));
} else {
    console.log(chalk.bgCyanBright("Development"));
}

async function start() {
    try {
        await mongoose.connect(config.get("mongoUri"));
        console.log(chalk.bgGreen("MongoDB connected."));
        app.listen(PORT, () => {
            console.log(
                chalk.bgGreen(`Server has been started on port ${PORT}...`)
            );
        });
    } catch (error) {
        console.log(chalk.bgRed(error.message));
        process.exit(1);
    }
}

start();
