import React from 'react';
import './accessories.css';
import Product from '../Product/product';

const Accessories = () => {
  return (
    <div className='accessories'>
      <h2>Doplňky</h2>
      <div className='products'>
        <Product
          image="blue-handbag.jpg"
          title="Modrá kabelka"
          description="Efektní kožená kabelka v krásné modré barvě poskytne dostatek prostoru pro váš mobil, peněženku a další nezbytnosti."
          price="3590 Kč"
        />

        <Product
          image="grey-scarf.jpg"
          title="Šedá vlněná šála"
          description="Stylová unisexová šála vyrobená ze 100% extra jemné merino vlny. Moderní, jednoduché a věčné."
          price="970 Kč"
        />

        <Product
          image="glasses.jpg"
          title="Brýle"
          description="Holky nezlobte se, já už fakt nevím, co bych si tady měl vymyslet za text. Šaty, boty a kabelky mě zcela vyčerpaly."
          price="1620 Kč"
        />
      </div>
    </div>
  )
}

export default Accessories;