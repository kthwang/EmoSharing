import React, { Component } from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import './index.css'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Fog from '../../videos/fog.mp4'
import Cloud from '../../videos/cloud.mp4'
import Rain from '../../videos/rain.mp4'
import Snow from '../../videos/snow.mp4'
import Storm from '../../videos/storm.mp4'
import Sun from '../../videos/sun.mp4'

class App extends Component {
  render() {
    return (
    <div>
      <video id="background-video" loop autoPlay muted>
            <source src={Storm} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
      >
      <Container style={{width: '100%'}}>
        <Menu inverted pointing secondary size='large' style={{backgroundColor: 'black'}}>
            <Link to="/" ><Menu.Item as='a' active>Home</Menu.Item></Link>
            <Link to="/profile" ><Menu.Item as='a'>Profile</Menu.Item></Link>
            <Link to="/lists" ><Menu.Item as='a'>Lists</Menu.Item></Link>
            <Menu.Item position='right'>
                <Link to="/login" ><Button inverted as='a'>Log in</Button></Link>
                <Link to="/signup" ><Button inverted as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
            </Menu.Item>     
        </Menu>
      </Container>
      <Container text>
          <Header
                inverted
                as='h1'
                content='EmoSharing'
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
          />
          <Header
                inverted
                as='h2'
                content='Share your emotion'
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
          />
          <Link to="/login"><Button primary size='huge'>
            Get Started
            <Icon name='right arrow' />
          </Button></Link>
      </Container>
      </Segment>
    </div>
    );
  }
}

export default App;
