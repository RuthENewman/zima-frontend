import React from 'react';
import Navbar from './Navbar';

const ComingSoon = (props) => (
<div className="comingSoonPage">
  <Navbar username={props.username} signout={props.signout}/>
   <h1 id="very_large_header" className="category_eng">
      СКОРО БУДЕТ...
   </h1>
</div>
)

export default ComingSoon;
