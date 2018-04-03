import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { KSwiper } from './keact'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      sliders: [1, 2, 3, 4],
      sliderConfig: {}
    }
    this.handle = this.handle.bind(this)
  }
  handle (e) {
    console.log('clicked:', e)
  }

  componentDidMount () {
    const API_URL = 'https://pgadmin.thatyou.cn/restapi/slides/'

    axios.get(API_URL).then((res) => {
      console.log(res)
      if (res.status === 200) {
        this.setState({
          sliders: res.data.results
        })
      }
    })

  }

  render() {
    return (
      <div className="App">
        <h1>React Storybook</h1>
        <hr />
        <KSwiper data={this.state.sliders} config={this.state.sliderConfig} />
      </div>
    );
  }
}

export default App;
