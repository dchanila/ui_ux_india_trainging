import React from 'react'
import { useParams } from 'react-router-dom';

/*
    routeParams will contain an object {id: <value>}
*/
const Contact = () => {
    const routeParams = useParams();
    // console.log(routeParams);
    return <div>Hi {routeParams.id}, Here are contact details</div>;
  };
  
export default Contact;