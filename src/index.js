import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

ReactDOM.render( <> 

<h1 className='heading_style'>Netflix Top Five Seriese</h1>

   {
     Sdata.map((value) => {
       return(
        <Card imgsrc={value.imgsrc}
       title = {value.title}
       sname={value.sname}
       link={value.link} />
       )
     }

     )
   }

</>,
  document.getElementById('root')
);
