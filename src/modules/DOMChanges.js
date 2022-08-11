import ListUserInterface from './listUserInterface.js';
import ListStore from './listStore.js';

export default class DOMChanges {
  static editTodo = (labelTag, todoParent, tIndex) => {
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    editInput.value = labelTag.textContent;
    todoParent.replaceChild(editInput, labelTag);
    // add event listener to enter key.
    document.querySelector('.edit-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        ListStore.editDescription(editInput.value, tIndex);
        todoParent.replaceChild(labelTag, editInput);
        window.location.reload();
      }
    });
  }

 static editDom = () => {
   const iconList = document.querySelectorAll('.fa-ellipsis-v');
   iconList.forEach((list) => {
     list.addEventListener('click', (e) => {
       const label = e.target.parentElement.parentElement.children[1];
       const todoParent = e.target.parentElement.parentElement;
       const children = Array.from(todoParent.parentElement.children);
       const tIndex = children.indexOf(e.target.parentElement.parentElement);
       DOMChanges.editTodo(label, todoParent, tIndex);
     });
   });
 }

static domChangeToRemove = (targetEvent) => {
  const targetEventChildren = Array.from(targetEvent.parentElement.parentElement.children);
  const targetIndex = targetEventChildren.indexOf(targetEvent.parentElement);
  if (targetEvent.checked) {
    targetEvent.parentElement.children[2].innerHTML = '<i class="fa fa-trash ic" aria-hidden="true"></i>';
    // add click event to ic.
    document.querySelector('.ic').addEventListener('click', (e) => {
      const icParent = e.target.parentElement.parentElement;
      ListUserInterface.removeFromDom(icParent);
      ListStore.removeFromLS(targetIndex);
    });
    ListStore.setCompletedTrue(targetIndex);
  } else {
    ListStore.setCompletedFalse(targetIndex);
    targetEvent.parentElement.children[2].innerHTML = '  <i class="fa fa-ellipsis-v add"></i>';
  }
}
}