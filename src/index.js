import './styles.css';
import ListUserInterface from './modules/listUserInterface.js';
import CreateTodoList from './modules/createTodoList.js';
import ListStore from './modules/listStore.js';
import DOMChanges from './modules/DOMChanges.js';
import ClearAllCompleted from './modules/clearAllCompleted.js';
// Initialize an empty array.
// document.addEventListener('DOMContentLoaded', ListUserInterface.showLists);
document.addEventListener('DOMContentLoaded', () => {
  ListUserInterface.showLists();
  // add event listener to the keypress and add button
  const addField = document.querySelector('.field');
  document.querySelector('.anchor-icon').addEventListener('click', (event) => {
    event.preventDefault();
    // call the neccessary functions to add.
    // create new list.
    const checkBoxes = document.querySelectorAll('.input-check');

    if (addField.value === '') {
    // console.log("Enter a task");
    } else {
      const list = new CreateTodoList(checkBoxes.length, addField.value, false);
      // Add newly created list to the dom and local storage.
      ListStore.addListToLS(list);
      ListUserInterface.addToDom(list);
      addField.value = '';
    }
  });
  // Add key pressed to the field
  addField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // call the neccessary functions to add.
      // create new list.
      const checkBoxes = document.querySelectorAll('.input-check');

      if (addField.value === '') {
      // console.log("Enter a task");
      } else {
        const list = new CreateTodoList(checkBoxes.length, addField.value, false);
        // Add newly created list to the dom and local storage.
        ListStore.addListToLS(list);
        ListUserInterface.addToDom(list);
        addField.value = '';
        window.location.reload();
      }
    }
  });
  // Remove upon check.
  // get the checkbox dom

  // by event bubbling get all checkboxes
  const toDoList = document.querySelector('.lists');
  toDoList.addEventListener('click', (e) => {
    if (e.target.className === 'input-check') {
      DOMChanges.domChangeToRemove(e.target);
    }
  });
  ListStore.setAllCompletedFalse();

  DOMChanges.editDom();
  // Add eventListener to the clear all button
  document.querySelector('.clear').addEventListener('click', () => {
    ClearAllCompleted.clear();
    window.location.reload();
  });
});
