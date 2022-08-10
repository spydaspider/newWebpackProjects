import ListStore from './listStore.js';

export default class ListUserInterface {
  static showLists = () => {
    const lists = ListStore.getListFromLS();
    lists.forEach((list) => ListUserInterface.addToDom(list));
  };

  static addToDom = (list) => {
    const listClass = document.querySelector('.lists');
    listClass.insertAdjacentHTML(
      'beforeend',
      `
            <div class="todolists">
              <input class="input-check" type="checkbox" /><label class="check">${list.description}</label>
              <div class = "icon">
              <i class="fa fa-ellipsis-v add"></i>
              </div>
            </div>
            `,
    );
  }

  static removeFromDom = (target) => {
    target.remove();
  }
}
