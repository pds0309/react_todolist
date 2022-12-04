import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { Provider } from 'react-redux';
import Todo from './pages/Todo';
import TodoDetail from './pages/TodoDetail';
import store from './redux/config/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Todo />} />
          <Route exact path="/:id" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
