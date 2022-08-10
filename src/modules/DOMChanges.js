import ListUserInterface from './listUserInterface.js';
import ListStore from './listStore.js';

export default class DOMChanges {
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