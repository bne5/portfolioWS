import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Me from './components/Images/me.jpeg';
import { Container, Header, Image } from 'semantic-ui-react';

const App = () => (
<Fragment>
  <Header size='huge' textAlign='center' >
    <Image src={Me}/>
      Ben Ruiz
      <Header.Subheader >
        Something about me
      </Header.Subheader>
  </Header>
  <Navbar />
  <Container textAlign='center'>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path ='/experience' component={Experience} />
      <Route exact path ='/projects' component={Projects} />
      <Route exact path ='/about' component={AboutMe} />
    </Switch>
  </Container>
</Fragment>

);

export default App;
