import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';  // Import Provider
import './index.css';
import App from './App.jsx';
import store from './store/store'; // Import your Redux store

createRoot(document.getElementById('root')).render(
    <Provider store={store}>  {/* Wrap your app with Provider */}
      <App />
    </Provider>
);
