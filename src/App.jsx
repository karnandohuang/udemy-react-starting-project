import { useState } from 'react'
import {CORE_CONCEPTS} from './data'
import {EXAMPLES} from './data-with-examples'
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState()
    function handleSelect(selectedButton) {
        // console.log('Hello World! - Selected', selectedButton)
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic.</p>
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic]?.title}</h3>
                <p>{EXAMPLES[selectedTopic]?.description}</p>
                <pre>
                      <code>{EXAMPLES[selectedTopic]?.code}</code>
                  </pre>
            </div>
        )
    }
  return (
    <div>
      <Header />
      <main>
          <section id="core-concepts">
              <h2>Core Concepts</h2>
              <ul>{CORE_CONCEPTS.map((concept) => (<CoreConcept key={concept.title} {...concept}/>))}</ul>
          </section>
          <section id="examples">
              <h2>Examples</h2>
              <menu>
                  {Object.entries(EXAMPLES).map(([key, value]) => (<TabButton key={key} onSelect={() => handleSelect(key)} isSelected={selectedTopic === key}>{value.title}</TabButton>))}
              </menu>
              {tabContent}
          </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
