import React from 'react';
import './dresses.css';
import Product from '../Product/product';

const Dresses = () => {
  return (
    <div className='dresses'>
      <h2>Šaty</h2>
      <div className='products'>
        <Product
          image="red-dress.jpg"
          title="Červené šaty"
          description="V barvě jahod! Krátké šaty v sytě červeném odstínu Váš šatník nekompromisně nabijí energií."
          price="2290 Kč"
        />

        <Product
          image="flower-dress.jpg"
          title="Květované šaty"
          description="Vzdušné, rozevláté a především velmi pohodlné! Tyhle šaty od dánské značky zkrátka nebudete chtít sundat."
          price="3100 Kč"
        />

        <Product
          image="yellow-dress.jpg"
          title="Žluté šaty"
          description="Žluté jako slunce! Volnější plátěné šaty s vypasovanou siluetou mají potenciál slušet opravdu každé postavě."
          price="4250 Kč"
        />
      </div>
    </div>
  )
}

export default Dresses;