import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import TagMenu from './components/TagMenu/TagMenu'
import SearchBar from './components/SearchBar/SearchBar'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
class App extends React.Component {
  render()
  {
    return (
      <div className="App">
            <Header />
            <div style={{position:'absolute',marginLeft:'140px',height:'1vh',display:'block'}}>
                <TagMenu />
             </div>
            <div className="container">
            <div style={{float:'left',width:'20%',display:'block',marginTop:'340px'}}>
              <div style={{marginTop:'50px',marginLeft:'5px'}}>
                <SearchBar/>
              </div>
              <div style={{marginTop:'20px',marginLeft:'5px'}}>
                <ShoppingCart/>
              </div>
            </div>
            <div style={{float:'right',width:'71%',marginRight:'10px'}}>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path="/products" component={Products} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
           </div>
      </div>
    );
  }
}

export default App;
