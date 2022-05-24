import cats from './cats';
import user from './user';

class SuperStore {
  constructor() {
    this.cats = cats;
    this.user = user;
  }
}

const store = new SuperStore();
export default store;
