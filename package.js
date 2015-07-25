Package.describe({
    name: "froatsnook:zombie-helpers",
    summary: "Find helpers you're not using any more",
    version: "1.0.0",
    documenation: "README.md",
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

