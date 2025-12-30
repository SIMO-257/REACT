import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("1. Constructor : L'horloge est initialisée.");
  }

  componentDidMount() {
    console.log("2. componentDidMount : Le chrono démarre !");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    console.log("3. componentDidUpdate : L'heure a changé à l'écran.");
  }

  componentWillUnmount() {
    console.log("4. componentWillUnmount : Nettoyage pour éviter les fuites de mémoire.");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center', marginTop: '20px' ,color:'Green'}}>Home</h1>
        <h1>Il est actuellement {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default Home;