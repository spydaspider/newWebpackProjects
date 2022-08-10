export default class ListStore {
    static getListFromLS = () => {
      let lists = [];
      if (localStorage.getItem('lists') === null) {
        lists = [];
      } else {
        lists = JSON.parse(localStorage.getItem('lists'));
      }
      return lists;
    }

    static addListToLS = (list) => {
      // get the list and add it.
      const lists = ListStore.getListFromLS();
      lists.push(list);
      localStorage.setItem('lists', JSON.stringify(lists));
    }

    static setCompletedTrue = (targetIndex) => {
      const lists = ListStore.getListFromLS();
      lists.forEach((list) => {
        if (list.index === targetIndex) {
          list.completed = true;
        }
      });
      localStorage.setItem('lists', JSON.stringify(lists));
    }

    static setCompletedFalse = (targetIndex) => {
      const lists = ListStore.getListFromLS();
      lists.forEach((list) => {
        if (list.index === targetIndex) {
          list.completed = false;
        }
      });
      localStorage.setItem('lists', JSON.stringify(lists));
    }

    static removeFromLS = (targetIndex) => {
      const lists = ListStore.getListFromLS();
      lists.splice(targetIndex, 1);
      localStorage.setItem('lists', JSON.stringify(lists));
    }
}