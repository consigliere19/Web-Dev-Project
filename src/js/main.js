import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"
import Home from "./pages/Home"
import HomeStore from "./stores/HomeStore"
import Time from "./pages/Time"
import TimeStore from "./stores/TimeStore"
import Data from "./pages/Data"
import DataStore from "./stores/DataStore"
import Currency  from "./pages/Currency"
import CurrencyStore from "./stores/CurrencyStore"
import { BrowserRouter, Route} from 'react-router-dom';

const app = document.getElementById('app');

ReactDOM.render(
      <BrowserRouter>
        <div>
            <Route exact path='/'><Home store={HomeStore}/></Route>
            <Route path='/home'><Home store={HomeStore}/></Route>
            <Route path='/time'><Time store={TimeStore}/></Route>
            <Route path='/data'><Data store={DataStore}/></Route>
            <Route path='/currency'><Currency store={CurrencyStore}/></Route>
        </div>
    </BrowserRouter>  
,app);

