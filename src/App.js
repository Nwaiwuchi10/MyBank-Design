import { BrowserRouter } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Account from './Components/Nchrys/Account';
import Header from './Components/Nchrys/Header';
import Last from './Components/Nchrys/Last';

function App() {



  return (
    <BrowserRouter>
    <div  >
      
    <Header />
    <List />
    <Account />
    <Last />
  

    </div>
    </BrowserRouter>
  );
}

export default App;
