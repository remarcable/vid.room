Package.describe({
  name: 'lightningboss:react-help-state',
  debugOnly: true,
  version: '0.0.1',
  summary: 'React package that displays the state of the application for debugging.',
  documentation: null,
});

Npm.depends({
  react: '15.0.1',
  'react-dom': '15.0.1',
});

Package.onUse(function (api) {
  var clientFiles = [
    'imports/ui/styles/react-help-state.scss',
  ];
  api.versionsFrom('1.3.2.4');
  api.use([
    'ecmascript',
    'fourseven:scss',
  ]);
  api.addFiles('./client/ui/styles/react-help-state.scss', 'client');
  api.mainModule('react-help-state.js', 'client');
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('lightningboss:react-help-state');
  api.mainModule('react-help-state-tests.js');
});
