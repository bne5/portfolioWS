import React from 'react';
import axios from 'axios';
import HeaderText from "./styles/HeaderText";
import styled from 'styled-components';
import { Segment, Card, Grid, } from 'semantic-ui-react';

class Projects extends React.Component {
  state = { repos: [] }


  getRepos = () => {
    axios.get('https://api.github.com/users/bne5/repos?sort=created')
      .then( res => this.setState({ repos: res.data }) )
  }

  render() {
    return (
      <AppContainer>
        <StyledButton onClick={this.getRepos}>Get Repos</StyledButton>
        <HeaderText fSize="large">
          My Portfolio
        </HeaderText>
        <Segment as={Transparent}>
          <HeaderText>My Projects</HeaderText>
          <Grid>
            <Grid.Row>
              { this.state.repos.map( r =>
                  <Grid.Column key={r.id} width={4}>
                    <StyledCard>
                      <Card.Content>
                        <Card.Header>
                          { r.full_name }
                        </Card.Header>
                      <Card.Meta>
                       { r.description }
                      </Card.Meta>
                    </Card.Content>
                  </StyledCard>
                </Grid.Column>
              )
            }
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment as={Transparent}>
        <HeaderText>Contact</HeaderText>
      </Segment>
    </AppContainer>
   )
 }
}


const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;

const Transparent = styled.div`
  background: transparent !important;
`;

const StyledCard = styled(Card)`
  height: 200px;
`;

const StyledButton = styled.div`
  display: flex;
  background: #191919;
  color: white;
  padding: 15px 25px;
  justify-content: center;
  transition: background 0.5s ease;
  cursor: pointer;
  
  &:hover {
    background: #3c3c3c;
    transition: background 0.5s ease;
  }
`;

  

export default Projects;