import React from 'react';
//import './App.css';
function Form1() {
  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      <form>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form1;

/*
import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the form.')
 }

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;

*/

/*
import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }

  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
       <div>Submtting Form...</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
*/

/*
...

form App(){
  return(
    <div className="wrapper">
      <h1>How About Them Apples</h1>
      {submitting &&
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>: {value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <fieldset>
         <label>
           <p>Apples</p>
           <select name="apple" onChange={handleChange}>
               <option value="">--Please choose an option--</option>
               <option value="fuji">Fuji</option>
               <option value="jonathan">Jonathan</option>
               <option value="honey-crisp">Honey Crisp</option>
           </select>
         </label>
         <label>
           <p>Count</p>
           <input type="number" name="count" onChange={handleChange} step="1"/>
         </label>
         <label>
           <p>Gift Wrap</p>
           <input type="checkbox" name="gift-wrap" onChange={handleChange} />
         </label>
       </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
*/