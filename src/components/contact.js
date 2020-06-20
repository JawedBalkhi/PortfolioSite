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
                    <h2>Phone: (+31)614598688</h2>

                    
                            
                            <form action="/action_page.php">
                                <label className="fn" for="fname">First Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                                    <label for="lname">Last Name</label>
                                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                                        <label for="country">Country</label>
                                        <select id="country" name="country">
                                            <option value="australia">Australia</option>
                                            <option value="canada">Canada</option>
                                            <option value="usa">USA</option>
                                        </select>

                                        <label for="subject">Subject</label>
                                        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                                        <input type="submit" value="Submit"/>
  </form>                 
                  </div>
                </Cell>
                </Grid>
                        )
                    }
                }
export default Contact;