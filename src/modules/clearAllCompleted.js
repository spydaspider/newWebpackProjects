import ListStore from './listStore.js';

export default class ClearAllCompleted {
    static clear = () => {
      const lists = ListStore.getListFromLS();
      // use the filter method to filter the array.
      const filteredLists = lists.filter((list) => list.completed === false);
      for (let i = 0; i < filteredLists.length; i += 1) {
        filteredLists[i].index = i;
      }
      localStorage.setItem('lists', JSON.stringify(filteredLists));
    }
}