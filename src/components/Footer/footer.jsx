import React from 'react';
import './footer.css'; 

const Footer = ({year, author}) => {
  return(
    <div className='footer'>
      <p className='copyright'>&copy; {year}, {author}</p>
      <p className='disclosure'>Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
    </div>
  )
}

export default Footer;