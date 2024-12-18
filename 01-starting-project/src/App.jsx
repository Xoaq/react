import {useState} from 'react';
import { Component } from 'react';
import Header from './components/Header/Header'; 
import ComponentsImage  from './assets/components.png';
import {CORE_CONCEPTS} from './data';
import CoreConcept from './components/CoreConcepts';
import TabButton from './components/TabButton';


function App() {
 const  [selectedTopic, setSelectedTopic] = useState('Plases select a button to see the content');

  let tabContent = 'Plases select a button to see the content';

  function handleSelect(selectedbutton){
    //selectedbutton => 'Components', 'JSX', 'Props', 'State'
  setSelectedTopic(selectedbutton);
  console.log('Selected button:', selectedbutton);
  tabContent = selectedbutton;
    
}

console.log('AppComponent Excetuting)');
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>

          <menu>
          <TabButton onSelect={ ()=> handleSelect('components')}> Components</TabButton>
          <TabButton onSelect={ ()=> handleSelect('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=> handleSelect('props')}>Props</TabButton>
          <TabButton onSelect={()=> handleSelect('state')}>State</TabButton>
          </menu>

          {selectedTopic}

        </section>
      </main>
    </div>
  );
}
export default App;
