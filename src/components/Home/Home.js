import React from 'react'
import './Home.css'
import logo from '../../coffee.JPG'
import logo1 from '../../c.JPG'
import logo2 from '../../d.JPG'
class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <div style={{marginTop:'10px'}}>
                    <img width="100%" src={logo} alt="coffee img"/>
                </div>
                <div>
                    <div style={{float:'left',width:'70%'}}>
                      <h2>Welcome to Chocolate & Coffee</h2>
                      <p>Lorem ipsum dolor sit amet, consecteur adipiscing elit. Donec malescuada facilisis erat, id sollicitudin leo sollicitudin in. Quisque quis elit eget neque convallius imprediet in utodio. Nunc vel lectus turpis, nec tincidunt ipsum. Pellentesque turpis tellus, pulvinar vehicula sodales a,sollicitudin egestas mauris.</p>
                      <ul>
                          <li>Vestibulum aliquet</li>
                          <li>Enim sit amet bibendum venenatis</li>
                          <li>Dolor risus ornare orci, ac mollis</li>
                          <li>Purchase it online at ThemeForest.</li>
                      </ul>
                      <p>Eros rhoncus convallis. Aliquam condimentum rhoncus ante a elementum.Praesent massa ligula, fermentum ac aliquet eu, ultricies a elit. Aliquam tincidunt lacus in nisi volupat eleifiend. urna in vulputate porttitor, mi est placerat tellus, at sagittis risus enim sit amet sapien.</p>
                    </div>
                    <div style={{float:'right',width:'25%'}}>
                        <img className='imgClass' width='100%' src={logo1} />
                        <br/>
                        <img className='imgClass' src={logo2} width='100%' />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;