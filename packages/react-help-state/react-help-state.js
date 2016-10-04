import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React, { Component, PropTypes } from 'react';

export const name = 'react-help-state';

class HelpState extends Component {
  render() {
    return (
      <div className="help-state-component">
        <h1>React Help State</h1>
      </div>
    );
  }
}

HelpState.propTypes = {
};

Meteor.startup(() => { // Create an element and use it as the root for React component
  let helpStateRoot = document.createElement('div');
  let a = document.createAttribute('id');
  a.value = 'react-help-state-root';
  helpStateRoot.setAttributeNode(a);
  document.body.appendChild(helpStateRoot);

  render(<HelpState />, document.getElementById('react-help-state-root'));
});
