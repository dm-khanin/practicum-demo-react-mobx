import './App.css';
import catStore from './store/cats';
import userStore from './store/user';
import store from './store/super-store';
import Cat from './Cat';
import { observer } from 'mobx-react';

function App() {
  // const { loading, data, doubledTotal, addCat, deleteCat } = catStore;
  // const { name } = userStore;

  const { cats: { loading, data, doubledTotal, addCat, deleteCat }, user: { name } } = store;

  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    addCat(form.elements.id.value);
    form.reset();
  }

  if (loading) {
    return (
      <div className="App">
        <h2>LOADING...</h2>
      </div>
    );
  }
  console.log(name);

  return (
    <div className="App">
      <h1>TITLE ({ doubledTotal })</h1>
      <div>
        {
          data.map(item => {
            return (
              <Cat
                key={item.id}
                id={item.id}
                onClick={deleteCat}
              />
            );
          })
        }
      </div>
      <form onSubmit={onSubmit}>
        <input type='text' name='id' />
        <button type='submit'>
          Add Cat
        </button>
      </form>
    </div>
  );
}

export default observer(App);

// 595f2810557291a9750ebfcf
// 595f2810557291a9750ebfd4
// 595f280a557291a9750ebf4a
// 595f280a557291a9750ebf5f
// 595f280c557291a9750ebf82
// 595f280c557291a9750ebf78
// https://cataas.com/api/cats?skip=0&limit=30
