import React from 'react';
import './App.css';
import {Layout, Header, Navigation,Drawer,Content}from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom'

function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className= "header-color" title="Jawed Balkhi Portfolio" scroll>
            
            <Navigation>
         
            <Link to="/PortfolioSite">Home </Link>
                <Link to="/aboutme">Over mij</Link>
                <Link to="/resume">CV</Link>
                <Link to="/projects">Projecten</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home </Link>
            <Link to="/aboutme">Over mij</Link>
                <Link to="/resume">CV</Link>
                <Link to="/projects">Projecten</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
