import { observable } from 'mobx';

class ObservableAppStore {
  @observable rgb = {
    red: 0,
    green: 0,
    blue: 0
  };
}

const observableAppStore = new ObservableAppStore();
export default observableAppStore;
