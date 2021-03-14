module.exports = {
    verbose: true,
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleNameMapper: {
        "tuttacatter(.*)$": "<rootDir>/src/$1"
    },
    testEnvironment: 'node'
}