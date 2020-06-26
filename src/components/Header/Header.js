import React from 'react'
import './Header.css'
import {withRouter} from 'react-router-dom'
class Header extends React.Component
{
    state = {selected:'/',active:'home',changed:false}
    
    handleClick = (e)=>
    {
        console.log(e.target.value);
        if(this.state.active != e.target.name)
        {
            console.log('changed tab');
            this.setState({selected:e.target.value,active:e.target.name,changed:true});  
        }
        else{
            console.log(this.state)
        }
    }
    componentDidUpdate = ()=>
    {
        if(this.state.changed)
        {
            this.props.history.push(this.state.selected);
            this.setState({changed:false})
        }
        
    }
    render()
    {
        return(
            <div id="top">
            <header className="ribbon-container">
              <p className="ribbon">
                <button style={{marginLeft:'20%'}} name='home' className={this.state.active=="home"?"active ribbon-content":"ribbon-content"} value='/' onClick={(e)=>this.handleClick(e)}>HOME</button>
                <button name='about' className={this.state.active=="about"?"active ribbon-content":"ribbon-content"} value="/about" onClick={(e)=>this.handleClick(e)}>ABOUT</button>
                <button className={this.state.active=="products"?"active ribbon-content":"ribbon-content"} name='products' value="/products" onClick={(e)=>this.handleClick(e)}>PRODUCTS</button>
                <button className="ribbon-content">GIFTS</button>
                <button className="ribbon-content">STORES</button>
                <button className="ribbon-content">FAQ</button>
                <button className={this.state.active=="contact"?"active ribbon-content":"ribbon-content"} name='contact' value="/contact" onClick={(e)=>this.handleClick(e)}>CONTACT</button>
              </p>
                
              
            </header>
          </div>
        );
    }
}
export default withRouter(Header);