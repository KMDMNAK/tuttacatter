module.exports = {
    verbose: true,
    moduleDirectories: [
        "node_modules",
        "src"
    ],
    moduleNameMapper: {
        "tuttacatter/(.*)$": "<rootDir>/src/$1"
    },
    modulePaths: [
        "<rootDir>/src"
    ],
    testEnvironment: 'node',
    setupFiles: ['<rootDir>/test/env-setup.ts']
}