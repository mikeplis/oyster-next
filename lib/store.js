import { action, observable, autorun } from 'mobx';

let store = null;

class Store {
    @observable from = null;
    @observable to = null;
}

// If we just returned `new Store()`, the user would lose store data if they navigated from Home -> other page -> Home
export function initStore() {
    if (store === null) {
        store = new Store();
    }
    return store;
}
