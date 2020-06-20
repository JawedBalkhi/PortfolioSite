import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import MaterialIcon /*{colorPalette}*/ from 'material-icons-react';


class Resume extends Component {
    render() {
        return (
            <Grid className="Resume" >
                <Cell col={8}>
                <div className="Resume-tekst">
                        <h1>Mijn CV</h1>
                        <h2>Jawed Balkhi</h2>
                      
                     
                        <div class="grid-item">  <tr>
                            <td>Adres: </td>
                            <td>Pauwhof 83
                                2289 BJ Rijswijk</td> 
                        </tr>
                        <tr>
                            <td>Geboorteplaats:</td>
                            <td>Kabul te Afghanistan</td>
                          
                        </tr>
                        <tr>
                            <td>Geslacht:</td>
                            <td> Man</td>
                          
                        </tr>
                        
                        <tr>
                            <td>Nationaliteit: </td> 
                            <td>Nederlandse</td>
                          
                        </tr>
                        <tr>
                            <td>Rijbewijs: </td>
                            <td>AM, B</td>
                          
                        </tr>
                     
                        <tr>
                            <td>Phone:</td>
                            <td>0614598688</td>
                          
                        </tr>
                      
                        </div>
                       
                    </div>
                
                </Cell>
                <Cell col={4} className="cell">
               
                <div className="Resume-tekst">
                     <div class="grid-item"></div>
                <div className="icons1">
                <img src="https://i.ibb.co/VDkmMbQ/Jawed1.jpg " alt="Profile-pic" height = "200"  ></img>
                </div>
                        </div>
                        </Cell>







                <Cell col={8}>
                    <div className="Resume-tekst" >
                        <h1>Opleidingen</h1>
                      
                        <div class="grid-container">
                        <div class="grid-item">  <tr>
                            <td>sep 2016 - heden  </td>
                            <td> HBO, Informatica 
                                Hoge School Rotterdam</td> 
                        </tr>
                        <tr>
                            <td>sep 2010 - jul2015</td>
                            <td>MBO, Systeembeheerder (behaald) ROC Leiden, Leiden</td>
                          
                        </tr>
                        <tr>
                            <td>sep 2008 - jul 2010</td>
                            <td>MBO, Medewerker ICT (behaald) ROC Leiden, Leiden</td>
                          
                        </tr>
                        <tr>
                            <td>sep 2007 - jul 2008</td> 
                            <td>MBO, Administratief medewerker (behaald) Haverkamp, Den Haag</td>
                          
                        </tr>
                        <tr>
                            <td>sep 2003 - jul 2007</td>
                            <td>VMBO/MAVO, ISK (behaald) Johan de Wit college, Den Haag</td>
                          
                        </tr>
                    </div>
                    
                    
                 
                    </div>
                    </div>
                    </Cell>

                    <Cell col={4} className="cell">
               
               <div className="Resume-tekst">
               <div className="icons1">
                    <MaterialIcon icon="school" size='200px' /> </div>
                       </div>
                       </Cell>
                    
                <Cell col={8}>
                    <div className="Resume-tekst">
                        <h1>Stages</h1>
                      
                        <div class="grid-container">
                        <div class="grid-item">  <tr>
                            <td>feb 2014 - jun 2014  </td>
                            <td> Visser 't Hooft lyceum Leiderdorp<td> Functie: Stagiair</td>
                               <td></td> Werkzaamheden: De studentenen de docenten helpen met IT problemen.<br></br> Een SCCM server implementeren voor de school en een beheer plan schrijven.</td> 
                        </tr>
                        <tr>
                            <td>sep 2012 - feb 2013  </td>
                            <td> SportCity Leiderdorp<td> Functie: Stagiair</td>
                               <td></td> Werkzaamheden: Systeem beheerder ( helpen met upgraden van Server 2003 naar Server 2008).</td> 
                        </tr>
                        <tr>
                            <td>sep 2011 - feb 2012  </td>
                            <td>Now that is it Wateringen<td> Functie: Stagiair</td>
                               <td></td> Werkzaamheden: Computer reparaties en laptop reparaties (extern & intern).</td> 
                        </tr>
                        <tr>
                            <td>sep 2010 - feb 2011 </td>
                            <td> Microfix, Leiden<td> Functie: Stagiair</td>
                               <td></td> Werkzaamheden: Computer/lapotop reparaties</td> 
                        </tr>
                 
                    </div>


                    
                 
                    </div>
                    </div></Cell>

                    <Cell col={4} className="cell">
               
               <div className="Resume-tekst">
               <div className="icons1">
               <MaterialIcon icon="work" size='200px' /> </div>
                       </div>
                       </Cell>
                    

                    
                    <Cell col={8}>
                    <div className="Resume-tekst">
                        <h1>Stages</h1>
                      
                        <div class="grid-container">
                        <div class="grid-item">  
                        <tr>
                            <td>feb 2020  - heden </td>
                            <td> HydroLogic Delft<td> Functie: Software ingenieur</td></td>
                        </tr>
                        <tr>
                            <td>aug 2018 - feb 2020 </td>
                            <td> Boers Crew Service Rotterdam<td> Functie: Taxi chauffeur</td></td>
                        </tr>
                        
                        <tr>

                            <td>aug 2016 - jul 2018  </td>
                            <td>De Roo    Naaldwijk<td> Functie: Taxi chauffeur</td></td>
                        </tr>
                        <tr>
                            <td>dec 2014 - jul 2016 </td>
                            <td>Well of Wine Den Haag<td> Functie: Magazijn beheerder</td>
                               <td></td> Werkzaamheden:  Ontvangen, controleren,<br></br> opslag gereedmaken voor praktische verbetering van procedures en werkmethoden</td> 
                        </tr>
                
                 
                    </div >
                </div>
                    </div></Cell>



                    <Cell col={4} className="cell">
               
               <div className="Resume-tekst">
               <div className="icons1">
               <MaterialIcon icon="developer_mode" size='200px' /> 
               </div>
                       </div>
                       </Cell>
            </Grid>
        )
    }
}
export default Resume;