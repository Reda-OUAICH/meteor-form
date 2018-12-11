import { Template } from 'meteor/templating';
import './main.html';


if (Meteor.isClient) {

  Template.form.events({

    'submit form': function (event) {
      event.preventDefault();
      var firstname = event.target.firstname.value;
      var lastname = event.target.lastname.value;
      var link = event.target.link.value;
      var result = firstname && lastname && link;
      console.log(result);
    }
  });
}
