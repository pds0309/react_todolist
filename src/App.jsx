import Header from './components/Header';
import { Provider } from 'react-redux';
import Todo from './pages/Todo';
import store from './redux/config/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Todo />
    </Provider>
  );
}

export default App;
