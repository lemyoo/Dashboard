import Entry from './Entry';
import "./App.css"
import { Provider } from 'react-redux';
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Entry />
    </Provider>
  );
}

export default App;
