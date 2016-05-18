// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by react-help-state.js.
import { name as packageName } from "meteor/react-help-state";

// Write your tests here!
// Here is an example.
Tinytest.add('react-help-state - example', function (test) {
  test.equal(packageName, "react-help-state");
});
