import React from 'react'
import './ShoppingCart.css'
class ShoppingCart extends React.Component
{
    render()
    {
        return(
            <div>
                <table className="Sc">
                    <thead><td style={{backgroundColor:'#b5651d',color:'white'}}>Shopping Cart</td></thead>
                    <tbody className="tb">
                        <tr>3 Items| $2.00</tr>
                        <tr>Check Out</tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ShoppingCart;