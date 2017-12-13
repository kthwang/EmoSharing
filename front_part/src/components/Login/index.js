import React, { Component } from 'react'
import './index.css'
import {
  Container,
  Menu,
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Logo from '../../images/Logo.png'
import Fog from '../../videos/fog.mp4'
import Cloud from '../../videos/cloud.mp4'
import Rain from '../../videos/rain.mp4'
import Snow from '../../videos/snow.mp4'
import Storm from '../../videos/storm.mp4'
import Sun from '../../videos/sun.mp4'

class Login extends Component {
    render() {
        return (
    <div>
      <video id="background-video" loop autoPlay muted>
            <source src={Rain} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
      <Container style={{width: '100%'}}>
        <Menu inverted pointing secondary size='large' style={{backgroundColor: 'black'}}>
            <Link to="/"><Menu.Item as='a'>Home</Menu.Item></Link>
            <Link to="/profile"><Menu.Item as='a'>Profile</Menu.Item></Link>
            <Link to="/lists"><Menu.Item as='a'>Lists</Menu.Item></Link>
            <Menu.Item position='right'>
                <Link to="/login"><Button inverted as='a'>Log in</Button></Link>
                <Link to="/signup" ><Button inverted as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
            </Menu.Item>     
        </Menu>
      </Container>
            <div className='login-form'>
                <style> {`
                    body > div,
                    body > div > div,
                    body > div > div > div.login-form {
                    height: 100%;
                    }
                `}</style>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h1' color='black' textAlign='center'>
                        <Image src={Logo} style={{width: 100}}/>
                            {''}Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input
                                fluid
                                icon='user'
                                iconPosition='left'
                                placeholder='User Name'
                            />
                            <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                            />
                            <Link to="/login"><Button color='black' fluid size='large'>Login</Button></Link>
                            <br />
                            <Link to="/signup"><Button color='black' fluid size='large'>Sign Up</Button></Link>
                        </Segment>
                    </Form>
                </Grid.Column>
                </Grid>
            </div>
    </div>
)
    }
    
    
}
export default Login  