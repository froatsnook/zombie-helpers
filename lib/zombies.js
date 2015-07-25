var $helpers = Template.prototype.helpers;

// templateName.helperName => count
helperUsage = { };

Template.prototype.helpers = function(dict) {
    var viewName = this.viewName;
    var newDict = { };

    // Iterate over helpers.
    _.each(dict, function(helper, helperName) {
        var fullName = viewName + "." + helperName;

        // Set initial count to 0.
        helperUsage[fullName] = 0;

        // Add a proxy function which calls the actual helper after
        // incrementing the count.
        newDict[helperName] = function() {
            helperUsage[fullName]++;
            var args = Array.prototype.slice.call(arguments);
            return helper.apply(newDict, args);
        };
    });

    // Call default Template.prototype.helpers.
    $helpers.call(this, newDict);
};

ZombieHelpers = function(templateName) {
    var zombies = [];

    _.each(helperUsage, function(count, helperName) {
        if (typeof templateName !== "undefined" && helperName.indexOf("Template." + templateName + ".") !== 0) {
            return;
        }

        if (count === 0) {
            zombies.push(helperName);
        }
    });

    return zombies;
};

