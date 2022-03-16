import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/Header/header'; //''
import Footer from './components/Footer/footer';
import Dresses from './components/Dresses/dresses';
import Shoes from './components/Shoes/shoes';
import Accessories from './components/Accessories/accessories';

const App = () => (
  <div className='container'>
    <Header title="Móda"/>
    <Dresses/>
    <Shoes/>
    <Accessories/>
    <Footer year={2022} author="Lucia"/>
  </div>
);

render(<App />, document.querySelector('#app'));