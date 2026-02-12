import { useState } from 'react'
import {CORE_CONCEPTS} from './data'
import {EXAMPLES} from './data-with-examples'
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button')
    function handleSelect(selectedButton) {
        // console.log('Hello World! - Selected', selectedButton)
        setSelectedTopic(selectedButton)
    }
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
                  <CoreConcept {...CORE_CONCEPTS[1]} />
                  <CoreConcept {...CORE_CONCEPTS[2]} />
                  <CoreConcept {...CORE_CONCEPTS[3]} />
              </ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
                  <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                  <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
                  <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
              </menu>
              <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic.toLowerCase()]?.title}</h3>
                  <p>{EXAMPLES[selectedTopic.toLowerCase()]?.description}</p>
                  <pre>
                      <code>{EXAMPLES[selectedTopic.toLowerCase()]?.code}</code>
                  </pre>
              </div>
          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
