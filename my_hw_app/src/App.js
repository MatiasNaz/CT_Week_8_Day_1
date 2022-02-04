import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import News from './views/News';
import Home from './views/Home';
import Shop from './views/Shop'

export default class Elephant extends Component {
  constructor() {
    super();
    console.log("I was created")
    this.state = {
      items: ['soccer cleats', 'soccer balls', 'shorts', 'jerseys']
    }
  }


  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop products={this.state.products}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />

        </Routes>
      </div>
    )
  }
}
