const path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    output: {
        path: path.resolve(__dirname, "out"),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts'],
        alias: {
            "tuttacatter": path.resolve(__dirname, "./src")
        },
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: path.resolve(__dirname, "tsconfig.json"),
                    },
                },
            },
        ],
    },
    target: "node"
}
