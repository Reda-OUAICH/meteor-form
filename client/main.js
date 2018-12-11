import {
  Template
} from 'meteor/templating';
import student from '../db/student';
import './main.html';

Template.list.helpers({
  allStudents(){
    return student.find();
  }
})

Template.Formulaire.events({

  'submit #form': function (event, template) {
    event.preventDefault();
    var firstname = template.find('#firstname').value;
    var lastname = template.find('#lastname').value;
    var link = template.find('#link').value;

    student.insert({
      firstname: firstname,
      lastname: lastname,
      link : link
    })
  }
});
