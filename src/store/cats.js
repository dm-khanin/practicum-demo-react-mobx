import { action, autorun, computed, makeObservable, observable, runInAction } from 'mobx';
class Cats {
  loading = true;
  data = [];

  constructor() {
    makeObservable(
      this,
      {
        loading: observable,
        data: observable,
        addCat: action,
        deleteCat: action,
        getCats: action,
        doubledTotal: computed,
      },
    );

    autorun(this.log); // на любое изменение будет лог, похоже на useEffect
    runInAction(this.getCats); // один раз при инициализации хранилища
  }

  addCat = (id) => {
    this.data.push({ id });
  };

  deleteCat = (id) => {
    const catIndex = this.data.findIndex(cat => cat.id === id);
    this.data.splice(catIndex, 1);
  };

  getCats = async () => {
    try {
      const response = await fetch('https://cataas.com/api/cats?skip=0&limit=30');
      const catsArray = await response.json();

      this.data = catsArray;
    } catch (e) {
      console.log('Error loading initial array', e);
    } finally {
      this.loading = false;
    }
  };

  get doubledTotal() {
    return this.data.length * 2;
  }

  log = () => {
    console.log(`Cats doubled total is ${this.doubledTotal}`);
  };
}

const store = new Cats();

export default store;
