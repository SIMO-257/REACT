import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';

// import './CSS/index3.css';
// import './CSS/index.css';
// import './CSS/index2.css';
import './CSS/Controle.css';




// import App from './App.jsx'
import APP_API from './APP_API ';
// import AppExamen from './AppExamen.jsx';



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <APP_API/>
  </Provider>,
)
