import { Component } from 'react';
import Header from './header';
import ComponentsImage  from './assets/components.png';

function CoreConcept(props){
  return(
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title="Components"
          description="The core UI of building Block"
          image={ComponentsImage}
          />
          <CoreConcept/>
          <CoreConcept/>
          <CoreConcept/>
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
