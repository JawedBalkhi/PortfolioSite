import React, { Component } from 'react';
import MaterialIcon /*{colorPalette}*/ from 'material-icons-react';
import { Grid, Cell } from 'react-mdl'


class About extends Component {
    render() {
        return (

            <Grid className="Aboutme" >
                <Cell col={12}>
                    <div className="Aboutme-tekst">
                        <h1>Hallo,</h1>
                        <h2>Ik ben Jawed Balkhi</h2>
                        <p>Ik ben Jawed Balkhi geboren op 11 maart 1991 in Kabul te Afghanistan.
                           Sinds mijn vijftiende woon ik in Nederland en het bevalt me vrij goed.
                           Ik heb internationale schakel klassen (ISK) gedaan en vervolgens heb ik MBO ICT afgerond op ROC Leiden.
                           Ik heb altijd ICT leuk gevonden dat is de reden waarom ik 6 jaar MBO ICT heb gevolgd en nu ook voor Informatica heb gekozen.</p>
                    </div>
                </Cell>
                <Cell col={12}>
                    <div className="Kwaliteiten">
                        <h1>Mijn kwaliteiten</h1>
                        <p>Ik ben erg gedreven en gemotiveerd, daarom ben ik er van overtuigd dat ik mijn diploma zal gaan halen. Ik ben communicatief sterk en kan goed overweg met iedereen, dit heb ik allemaal geleerd tijdens mijn werkzaamheden bij verschillende bedrijven.
                           Ik heb twee jaar als magazijnbeheerder gewerkt bij Well of Wine. Gedurende deze periode heb ik mijzelf onmisbaar gemaakt in het team. Ik ben daarom een goede teamplayer. Verder ben ik sociaal en kan ik goed met mensen opschieten. </p>
                    </div>
                </Cell>
                <Cell col={12} >
                    <div className="Hobbys">
                        <h1>Hobby’s </h1>
                        <h2>Mijn hobby's zijn:</h2>

                        <ul>
                            <MaterialIcon icon="fitness_center" size='large' /> 
                            <MaterialIcon icon="pool" size='large' />
                            <MaterialIcon icon="live_tv" size='large' />
                            <MaterialIcon icon="flight_takeoff" size='large' />

                        </ul>
                        
                    </div>
                </Cell>
                <Cell col={12}>
                    <div className="Toekomstplannen">
                        <h1>Toekomstplannen</h1>
                        <p>Nu ik bewust de keuze heb genomen om informatica te studeren ben ik vastberaden om te slagen. Mijn doel is om uiteindelijk ergens vast in dienst te zijn als programmeur. Ik hoop uiteindelijk ook voor mezelf ooit een applicatie te ontwikkelen die onmisbaar zal worden in het dagelijks leven zoals vele apps vandaag de dag. Ik weet dat ik hier hard voor zal moeten werken en dat ben ik zeker bereid om te doen.</p>
                    </div>
                </Cell>


            </Grid>
        )
    }
}
export default About;