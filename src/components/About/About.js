import React from 'react'
import './About.css'
class About extends React.Component
{
    render()
    {
        return(
            <div>
                <h2>About</h2>
                <p>Nullam Condimentum tellus quis neque. Quisque id nibh eget elit bibendum aliquet.Phaselus sodelus vulputate ligula.Curabitur Nulla. Nam quis Felis. Curabitur placerat nisl sit amet orci. Nunc vitae nunc. Ut blandit viverra mi. Aliquam et urna.Aliquam ultrices pharetra lectus.</p>
                <h3>H2 Check List</h3>
                <ul style={{listStyleType:'tick'}}>
                    <li>Vestibulum aliquet</li>
                    <li>Enim sit amet bibendum venenatis</li>
                    <li>Dolor risus ornare oricu, ac mollis</li>
                    <li>Nunc vestibulum augue a metus</li>
                </ul>
                <h3>H3 Table Example</h3>
                <table cellSpacing='0' className="homeTable" style={{width:'80%'}}>
                    <thead style={{backgroundColor:'#b5651d',color:'white'}}  >
                        <tr>
                            <td>Nunc</td>
                            <td>Vestibulum</td>
                            <td>augue</td>
                            <td>a metus</td>
                            <td>lampers</td>
                        </tr>
                    </thead>
                    <tbody className="homebody">
                         <tr>
                            <td>Nunc</td>
                            <td>Vestibulum</td>
                            <td>augue</td>
                            <td>a metus</td>
                            <td>lampers</td>
                        </tr>
                        <tr>
                            <td>Nunc</td>
                            <td>Vestibulum</td>
                            <td>augue</td>
                            <td>a metus</td>
                            <td>lampers</td>
                        </tr>
                        <tr>
                            <td>Nunc</td>
                            <td>Vestibulum</td>
                            <td>augue</td>
                            <td>a metus</td>
                            <td>lampers</td>
                        </tr>
                        <tr>
                            <td>Nunc</td>
                            <td>Vestibulum</td>
                            <td>augue</td>
                            <td>a metus</td>
                            <td>lampers</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default About;