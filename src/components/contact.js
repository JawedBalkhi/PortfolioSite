import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <Grid className="grid-Contact" >
                <Cell col={12}>
                <div className="Contact-tekst">
                    <h1>Contact Me</h1>
                    <h2>Email: Jawed.b@hotmail.com</h2>
                    <h2>Telefoon: (+31)614598688</h2>

                    
                            
                            <form action="/action_page.php">
                                <label className="fn" for="fname">Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                                    <label for="lname">Achter Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                        <label for="country">Land</label>
                                        <select id="country" name="country">
                                            <option value="Nederland">Nederland</option>
                                            <option value="Duitsland">Duitsland</option>
                                            <option value="usa">USA</option>
                                        </select>

                                        <label for="Onderwerp">Onderwerp</label>
                                        <textarea id="Onderwerp" name="Onderwerp" placeholder="Schrijf hier iets.." ></textarea>

                                        <input type="bevestigen" value="bevestigen"/>
  </form>                 
                  </div>
                </Cell>
                </Grid>
                        )
                    }
                }
export default Contact;