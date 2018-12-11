import { Template } from 'meteor/templating';


import './main.html';


Template.form.onCreated(function helloOnCreated() {
});

Template.form.helpers({
});

Template.form.events({
  'click button'(event, instance) {
  },
});
