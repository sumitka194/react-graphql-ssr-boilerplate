module.exports = {
    "extends": "airbnb",
    "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}]
    },
    "env": {
        "browser": true,
        "node": true
    },
};