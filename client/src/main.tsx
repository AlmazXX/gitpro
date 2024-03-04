import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './store/store.ts';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
