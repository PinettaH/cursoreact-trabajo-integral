import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routes from "./pages/routes"
import { store } from "./redux/store";
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </Provider>
  )
}

export default App;