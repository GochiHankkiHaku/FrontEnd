import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'pages/Router';
import CustomToast from 'components/CustomToast';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <CustomToast />
    </BrowserRouter>
  );
}

export default App;
