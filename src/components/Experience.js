import React from 'react';
import { Grid, Button, Header, Modal, } from 'semantic-ui-react'

function Experience() {
  let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
  };

  return(
  <Grid columns={1}>
    <Grid.Row>
      <Grid.Column style={styles}>
        <Modal trigger={<Button>Morgan Stanley 2017-2019</Button>}>
          <Modal.Header>Morgan Stanley January 2017 - June 2019</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header> Associate, Service Review Unit                     </Header>
              <p>
                Review client-submitted documentation requesting money movements or transfers of securities between accounts for accuracy and authenticity (e.g., IRAs, trusts, personal accounts)
                •	Manage risk by verifying accuracy of account details, performing signature verification, and confirming request is in line with applicable tax and regulatory laws
                •	Report comprehensive team metrics to Branch Service Managers, providing root cause analysis documenting types of transactions most often sent back for re-review
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
      <br />
      <Grid.Column style={styles}>
        <Modal trigger={<Button>Contender Bicycles 2016-2017</Button>}>
          <Modal.Header>Contender Bicycles 2016-2017</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Salesperson/Service Writer</Header>
              <p>
                Diagnose and check bikes in for service; schedule repairs and coordinate repairs/builds with incoming parts
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
      <Grid.Column style={styles}>
        <Modal trigger={<Button>Wasatch Brewery 2014 – 2015</Button>}>
          <Modal.Header>Wasatch Brewery September 2014 – December 2015</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Line Cook</Header>
              <p>
                Worked all stations, specializing in grill and sauté; prepared, performed clean-up, and breakdown of station daily
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
      <Grid.Column style={styles}>
        <Modal trigger={<Button>Copper Onion 2015</Button>}>
          <Modal.Header>Copper Onion April 2015 – May 2015</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Line Cook</Header>
              <p>
                Worked garde manger station, including appetizers, salad, and dessert; timed execution with other stations
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
      <Grid.Column style={styles}>
        <Modal trigger={<Button>Godman Sachs 2000-2013</Button>}>
          <Modal.Header>Goldman Sachs january 2000 - March 2013</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Associate, Team Manager and Project Manager</Header>
              <p>
                Options & Futures Operations
                •	Streamlined several manually intensive processes, saving over 120 hours per month and enhancing the client experience, including automating the exercise process and open/close position adjustments
                •	Partnered directly with clients to resolved account issues, ensuring accuracy in regulatory reporting
                •	Facilitated the migration of functions from Chicago to Salt Lake City; hired and managed a team of six, providing regular feedback to individual team members as well as yearly formal reviews
                •	Provided structured training to all new hires, instilling the importance of excellent client service, attention to detail, diligent risk management, and teamwork
                •	Managed industry wide initiative to change Option Symbology, the conversion option symbol names on internal systems to match new naming conventions on US Option Exchanges
                •	Wrote test scripts and performed regression testing of affected programs to accept new naming conventions for existing option symbols
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
      <Grid.Column style={styles}>
        <Modal trigger={<Button>ABN Amro 1997 – 2000</Button>}>
          <Modal.Header>ABN Amro July 1997 – January 2000</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Analyst, Trade and Position Balancer </Header>
              <p>
              •	Resolved stock trade breaks before market open by contacting brokers, opposing firms, and traders
              •	Balanced position and cash for stock trades daily
              </p>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  )
}


export default Experience;