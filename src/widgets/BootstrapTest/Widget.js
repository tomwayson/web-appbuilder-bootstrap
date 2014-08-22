define([
  'dojo/_base/declare',

  'jimu/BaseWidget',

  // add references to bootstrap components
  // that you plan to use in your widget
  // if you are using them declaratively (in template markup)
  // then you don't even need to reference them in the
  // widget's factory method below
  'bootstrap/Dropdown',
  'bootstrap/Tab',
  'bootstrap/Modal'
], function(
  declare,
  BaseWidget
) {

  var clazz = declare([BaseWidget], {
    //these two properties are defined in the BaseWiget
    baseClass: 'bootstrap-test',
    name: 'BootstrapTest',

  });

  return clazz;
});