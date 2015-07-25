During the development of a large meteor application, I noticed that many helpers were unused and hanging around until someone figured out it was time to delete them.

This package inserts itself between Meteor and your helpers.  It provides a function you can call to get a list of helpers that were never used.

Usage
=====

Step 1: install
---------------
`meteor add froatsnook:zombie-helpers`

Step 2: use your application
----------------------------
Start your application and use all the features you can.  This ensures that helpers aren't marked as zombies just because you forgot to render a particular template.

Step 3: call ZombieHelpers
--------------------------
```javascript
Package["froatsnook:zombie-helpers"].ZombieHelpers()
// => ["Template.welcome.helper1", "Template.welcome.helper3", "Template.xyz.helper4"]
```

You can also provide a template name to just get a list of zombie helpers for that template:

```javascript
Package["froatsnook:zombie-helpers"].ZombieHelpers("xyz")
// => ["Template.xyz.helper4"]
```

Step 4: Delete!
---------------
Go through the potential zombies, make sure they aren't used, delete them, and forget them.

Debug Only
==========
This package is debug only.  That's why the `ZombieHelpers` function can't be accessed except through `Package`.  It also means that it won't cause any slowdown when you run in production (not that it should ever cause a noticeable slowdown when not in production).

How it works
============
It overwrites `Template.prototype.helpers` and replaces each of your helpers with another function that increments a count for that helper before calling the original helper.  That's it!

Future Work
===========
* Add a UI that displays helpers per template sorted by usage count.
* Tests

License
=======
MIT

