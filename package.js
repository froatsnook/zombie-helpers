Package.describe({
    name: "froatsnook:zombie-helpers",
    summary: "Find helpers you're not using anymore",
    version: "1.0.1",
    documenation: "README.md",
    git: "https://github.com/froatsnook/zombie-helpers",
    debugOnly: true,
});

Package.onUse(function(api) {
    api.versionsFrom("1.1.0.2");
    api.use(["meteor-platform"]);
    api.use(["templating"]);
    api.use(["underscore"]);

    api.addFiles("lib/zombies.js", ["client"]);
    api.export("ZombieHelpers", ["client"]);
});

