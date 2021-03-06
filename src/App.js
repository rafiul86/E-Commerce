import react from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Nomatch from './components/Nomatch/Nomatch';
import ProductDetail from './components/ProductDetails/ProductDetail';

function App() {
  return (
   <>
   <Header></Header>
   <Router>
     <Switch>
       <Route path ="/Shop">
       <Shop></Shop>
       </Route>
       <Route path = "/Review">
         <Review></Review>
       </Route>
       <Route path = "/Inventory">
         <Inventory></Inventory>
       </Route>
       <Route path = "/product/:productKey">
         <ProductDetail></ProductDetail>
       </Route>
       <Route exact path ="/">
       <Shop></Shop>
       </Route>
       <Route path ="*">
        <Nomatch></Nomatch>
       </Route>
     </Switch>
   </Router>
   </>
  );
}

export default App;
