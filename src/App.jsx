
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css'
import Menu from './pages/menu/Menu'
import Dashboard from './pages/dashboard/Dashboard';


const App = () => {
  return (

    <div >
      <Menu />
      <Dashboard />
    </div>



  );
};

export default App;