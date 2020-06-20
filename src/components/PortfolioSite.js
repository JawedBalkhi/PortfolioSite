import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';


class Landing extends Component {
    render() {
        return (

            <Grid className="landing-grid" >
                <Cell col={12}>
                   
                    <div style={{ width: '100', margin: 'auto' }}>
                       
                    <div className ="landing-img">
                        <picture>
                        
                        <source srcset="https://i.ibb.co/VDkmMbQ/Jawed1.jpg "

media="(min-width: 800px)" />

  <img src="https://i.ibb.co/G3F7wz8/Jawed.jpg" alt="Profile-pic" height = "250"  ></img>
                       
                        </picture>
                        </div>
                        </div>
           

                    <div className="banner-text">
                        
                        <h1>Hello !!</h1>
                        <h2>Ik ben Jawed Balkhi</h2>
                        <p>Deze site dient als mijn portfolio. Hier kunt u informatie vinden over mij wat betreft mijn persoonlijke gegevens en mijn professionele voortgang.</p>
                        <hr />
                        <p> HTML | CSS| .Net Core | React | Grid | C# | Sql Server</p>
                        <div className="social-links">
                                                    

                            {/* Githunb */}
                            < SocialIcon url="http://facebook.com/jaketrent" />
                            {/* linkedin */}
                            < SocialIcon url="https://www.linkedin.com/in/jawedbalkhi/" />
                            {/* facebook */}
                            < SocialIcon url="https://www.facebook.com/jawed.balkhi.37" />
                                

                        </div>
                      
                    </div>
                </Cell>
            </Grid>

        )
    }
}
export default Landing;