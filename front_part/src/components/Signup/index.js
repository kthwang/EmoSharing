import React, { Component } from 'react'
import './index.css'
import {
  Container,
  Menu,
  Button,
  Form,
  Input,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Fog from '../../videos/fog.mp4'
import Cloud from '../../videos/cloud.mp4'
import Rain from '../../videos/rain.mp4'
import Snow from '../../videos/snow.mp4'
import Storm from '../../videos/storm.mp4'
import Sun from '../../videos/sun.mp4'

class Signup extends Component {
    render() {
        return (
    <div>
      <video id="background-video" loop autoPlay muted>
            <source src={Cloud} type="video/mp4" />
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
      <Segment
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
      >
        <Container style={{width: '100%'}}>
            <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
            >
                <Grid.Column style={{ maxWidth: 500 }}>
                    <Segment stacked>
                    <Form inverted className='segment' size='large'>
                        <Form.Group widths='equal'>
                            <Form.Field required>
                                <label style={{textAlign:'left'}}>First name</label>
                                <Input placeholder='First Name' />
                                <label style={{textAlign:'left'}}>Last name</label>
                                <Input fluid placeholder='Last Name' />
                                <label style={{textAlign:'left'}}>Username</label>
                                <Input placeholder='User Name' />
                                <label style={{textAlign:'left'}}>Password</label>
                                <Input placeholder='password' type='password' />
                                <label style={{textAlign:'left'}}>Re-Password</label>
                                <Input placeholder='re-password' type='password' />         
                            </Form.Field>
                        </Form.Group>
                        <Form.Checkbox label='I agree to the terms and conditions' />
                        <Button inverted color='white' size='large'>Submit</Button>
                    </Form>
                    </Segment>
                    <Message attached='bottom' warning>
                        <Icon name='help' />
                        Already signed up?&nbsp;<a href='/login'>Login here</a>&nbsp;instead.
                    </Message>
                </Grid.Column>
            </Grid>
        </Container>
    </Segment>
  </div>
      )
    }  
}
export default Signup