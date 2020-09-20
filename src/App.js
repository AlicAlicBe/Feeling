import React, { Component } from 'react';
import './App.css';
import { Button, notification, Select, Carousel, Input, Slider } from 'antd';
import i1 from './photos/i1.jpg'
import i2 from './photos/i2.jpg'
import i3 from './photos/i3.jpg'
import i4 from './photos/i4.jpg'

const { Option } = Select;

class App extends Component {
  state = {
    url: '',
    config: {},
    apiSelected: 0,
    apiValidated: 0,
    isChecked: false,
    isHeader: true,
    value: "",
    testImage: "",
    isLogedIn: false,
    login: "",
    password: "",
    back: "white",
    degres: "",
    sliding: "",
    valueTwo: ""
  }



  handleCheck = () => {
    this.setState({isChecked: !this.state.isChecked})
  }
  handleHeader = () => {
    this.setState({isHeader: !this.state.isHeader})
  }

  handleChangeLogin = (event) => {
    this.setState({login: event.target.value});
  }
  handleChangePassword = (event) => {
    this.setState({password: event.target.value});
  }
  handleConnect = () => {
    if ((this.state.login === "maxime" && this.state.password === "alicalic") ||
        (this.state.login === "alicia" && this.state.password === "alicalic"))
      this.setState({isLogedIn: true})
  }

  openNotification = (msg) =>{
    notification.open({
      message: msg
    });
  }
  handleChange = (event) => {
    //console.log("value:", event)
    this.setState({value: event});
    if (event === "Caliente")
        this.openNotification("Oulala 😀");
    if (event === "Romantique")
        this.openNotification("Oui ma charmante demoiselle");
    if (event === "Besoin d'affection")
        this.openNotification("Moooh bébé ne t'inquietes pas je t'aime");
    if (event === "Caline")
        this.openNotification("En mode PilouPilou");
  }
  handleChangetwo = (event) => {
      console.log(event.target.value)
    this.setState({valueTwo: event.target.value});
  }

  slide = (slide) => {
    this.setState({sliding: slide})
  }

  render() {
    const style = {width: "60%", marginLeft: "20%", marginTop: "2%", textAlign: "center"}
    if (this.state.isLogedIn) {
      return (
      <>
      <div>
        <div>
            <div style={style}>
            Choisir mon humeur :
            </div>
            <div style={style}>
                <Select defaultValue="Selecionner mon humeur" style={{ width: "100%" }} onChange={this.handleChange}>
                <Option value="Caliente">Caliente</Option>
                <Option value="Romantique">Romantique</Option>
                <Option value="Besoin d'affection">Besoin d'affection</Option>
                <Option value="Caline">Caline</Option>
                </Select>
            </div>
        </div>

        <div style={style}>
            Choisir le degres :
        </div>
        <div style={style}>
            <Slider value={this.state.sliding} onChange={this.slide}></Slider>
        </div>
        <div  style={style}>
            Envie de rajouter un commentaire
        </div>
        <div style={style}>
            C'est par ici :
        </div>
        <div  style={style}>
            <Input value={this.state.valueTwo} onChange={this.handleChangetwo}></Input>
        </div>
        <div style={style}>
            <Button style={{ width: "80%" }} onClick={this.handleConnect}>Je valide</Button>
        </div>
        <div>
            <Carousel autoplay={true}>
                <div >
                    <img style={{width: "40%", marginLeft: "30%", marginTop: "2%"}} src={i1} alt="a"></img>
                </div>
                <div >
                    <img style={{width: "40%", marginLeft: "30%", marginTop: "2%"}} src={i2} alt="a"></img>
                </div>
                <div >
                    <img style={{width: "40%", marginLeft: "30%", marginTop: "2%"}} src={i3} alt="a"></img>
                </div>
                <div >
                    <img style={{width: "40%", marginLeft: "30%", marginTop: "2%"}} src={i4}alt="a"></img>
                </div>
            </Carousel>
        </div>
      </div>
      </>
      )
    }
    else {
      return (
        <div>
          <div style={style}>
            <Input onChange={this.handleChangeLogin}></Input>
          </div>
          <div style={style}>
            <Input.Password onChange={this.handleChangePassword}></Input.Password>
          </div>
          <div style={style}>
            <Button onClick={this.handleConnect}>Se connecter</Button>
          </div>
        </div>
      )
    }
  }
}

export default App;