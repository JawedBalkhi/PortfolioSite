import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';




class Projects extends Component {
    render() {
        return(
          




                   
            
            <Grid className="Proejct" >
            <Cell col={6}>  
                <div className="Project-tekst">

                             
                     
                                    <h1>Housy App</h1>
                                    <h2>Advies type woning</h2>
                                    <p> Door de woningnood en vooral het gebrek aan de gevraagde woningtypes in bepaalde gemeenten, wil IlionX door middel van een tool hun klanten, gemeenten, adviseren de juiste woningtypes te bouwen. Hiervoor maken wij gebruik van Datavault modelring methode. Deze applicatie is gebouwd met React en weergeeft per gemeente hoeveel mensen er wonnen en de leeftijd van de bewoners gecategoriseerd onder 18 tot met 30, 30 tot met 50 en 50 +.

                                    </p>
  
                                    <div className ="project-img">
                      
                                        <picture>
   
                                                <img src="https://i.ibb.co/PTNBnGK/housyapp.png" alt="Profile-pic" ></img>


                                        </picture>

                                    </div>
                                    
                                </div>

                                
                                
                            </Cell>
                            <Cell col={6}>  
                <div className="Project-tekst">

                             
                       
                       
                                    <h1>Quiz game</h1>
                                    <h2>Quiz game data quility</h2>
                                    <p> Voor het bouwen van de serious game hebben we gekozen om een multiple choice quiz te maken.
                                        De vragen die erin voorkomen zijn gebaseerd op datakwaliteit. De game duurt ongeveer 15 minuten
                                        en zal eindigen zodra de tijd is verstreken. Elke spel bestaat uit tien vragen. De vragen zijn multiple
                                        choice en bevatten twee of vier opties. Zodra het spel is gestart zullen de vragen verschijnen.
                                        Vervolgens kun je de vraag beantwoorden door te klikken een van de vier of twee opties.</p>

                                        <div className ="project-img">

                      
                           <picture>
                           
                              
                           <img src="https://i.ibb.co/9VVvVS1/Quiz.png" alt="Profile-pic" height = "250"  ></img>
                          
                           </picture>
                           
                           </div>
                                </div>
                                
                            </Cell>

            <Cell col={6}>  
                <div className="Project-tekst">

                             
                       
                                    <h1>Euromast</h1>
                                    <h2>Beklimmen van de euromast</h2>
                                    <p> Het doel van dit project was een spelconcept te realiseren in PyGame. Daarbij hadden we de keuze uit verscheidene spellen die we konden gaan realiseren. Ons groepje had gekozen voor de Euromast game het spel waaring je de eurmast kan beklimmen door aantal vragen goed te beantworden. 

                                    Deze game is gemaakt met Pygame. Het spel is volledig functioneel en heeft een diepgaand speelsysteem.</p>
                                    
                       

                      
<picture>

   <div className="img">
    <img src="https://i.ibb.co/VJygdnj/Euromast.png" alt="Profile-pic" height = "250" width="550"  />
    </div>

</picture>


                                </div>
                                
                            </Cell>
                            <Cell col={6}>
                                <div className="Project-tekst">

                      
                       
                                    <h1>Giong 010</h1>
                                    <h2>Zoeken naar activiteiten en openings tijden</h2>
                                    <p>Wij hebben een applicatie gemaakt die alle openingstijden en sluitingstijden van onderstaande activiteiten in een database bijhoud.
                                        Squashbaan, Tennisbaan, Zwembad, Voetbaalzaal, Vollyballzaal, Vergaderzaal en Markten. ​
                                        Alleen de administrator kan gegevens toevoegen of wijzigingen. Normale gebruikers kunnen op een dag en een locatie selectreen om te kijken welke activiteiten er zijn en de openings tijden hiervan. </p>
                                
                                
                                        <div className ="project-img">
                           <picture>
                           
                              
                               <img src="https://i.ibb.co/8s7zRTw/gionig010.png" alt="Profile-pic" height = "250" width="550" />
                          
                           </picture>
                          
                           </div>
                                </div>
                            </Cell>
                            <Cell col={6}>
                                <div className="Project-tekst">

                      
                   
                                    <h1>ElectroShop</h1>
                                    <h2>Koop je elctro producten </h2>
                                    <p>Als project moesten we een webshop maken. Als project groep mochten we zelf kiezen welke programmeertaal en omgeving wij gaan gebruiken. Mijn groepje heeft gekozen voor .NET Core met de Razor template engine. We waren verantwoordelijk voor het maken van heel de website inclusief het opzetten van de database en de hosting hiervan. We moesten ook onze project afstemmen en aanpassen op de wensen van de product owner. Daarbij waren we overeengekomen dat de website een website zou moeten zijn voor alle elektrische apparaten. </p>
                               
                                    <div className ="project-img">
                           <picture>
                           
                              
                               <img src="https://i.ibb.co/vmVy2Rw/Electro.png" alt="Profile-pic" height = "250" width="550"   />
                          
                           </picture>
                          
                           </div>
                                </div>
                            </Cell>

                            <Cell col={6}>
                                <div className="Project-tekst">

                    
                          
                           
                                    <h1>RVL</h1>
                                    <h2>voorkomen recidivervl </h2>
                                    <p>Dit project is gemaakt voor het bedrijf RVL. Het doel van dit project was om te voorspellen hoe groot de kans is dat een crimineel meerdere keren een misdaad zou plegen op basis van de eerder gepleegde misdaden. Om dit te voorspellen hebben we meerdere algoritmen gebruikt. </p>
                                
  
                                <div className ="project-img">
                           <picture>
                           
                              
                           <img src="https://i.ibb.co/jgT26TC/RVL.png" alt="Profile-pic" height = "250" width="550" />
                          
                           </picture>
                           </div>

                                </div>
                            </Cell>
                         
                          
            
                        </Grid>

              

        )
    }
}
export default Projects;