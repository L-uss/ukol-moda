import React from 'react'; //''
import './shoes.css';
import Product from '../Product/product';

const Shoes = () => {
  return (
    < div className='shoes'>
      <h2>Boty</h2>
      <div className='products'>
        <Product
          image="running-shoes.jpg"
          title="Běhací tenisky"
          description="Růžová s kontrastními šedými a bílými detaily? Veliká paráda! Tyhle tenisky jsou další srdcová záležitost."
          price="1790 Kč"
        />

        <Product
          image="shiny-shoes.jpg"
          title="Třpytivé lodičky"
          description="Elegantní třpyticé lodičky, které padnou skoro ke každému outfitu. Toto nesmí ve vašem šatníku chybět."
          price="2950 Kč"
        />

        <Product
          image="red-shoes.jpg"
          title="Červené botičky"
          description="Extravagantní červené boty s vysokým šnerováním. V těchto botách se zá vámi budou všichni otáčet."
          price="6200 Kč"
        />
      </div>
    </div>
  )
}

export default Shoes;