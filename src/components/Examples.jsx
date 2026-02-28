import {useState} from "react";
import {EXAMPLES} from "../data-with-examples";
import TabButton from "./TabButton";

export default function Examples() {
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
        <>
            <section id="examples">
                <h2>Examples</h2>
                <menu>
                    {Object.entries(EXAMPLES).map(([key, value]) => (<TabButton key={key} onSelect={() => handleSelect(key)} isSelected={selectedTopic === key}>{value.title}</TabButton>))}
                </menu>
                {tabContent}
            </section>
        </>
    )
}