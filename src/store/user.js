import { makeObservable, observable } from 'mobx';

class User {
  name = 'Вася Пупкин';

  constructor() {
    makeObservable(
      this,
      {
        name: observable,
      }
    )
  }
}

const user = new User();
export default user;
