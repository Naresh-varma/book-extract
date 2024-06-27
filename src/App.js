import './css/App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Library } from './components/Library';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Header/>
        <Library/>
        <Footer/>
      </Provider>
    </div>
  );
}

export default App;
