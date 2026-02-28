import { useState } from 'react'
import {EXAMPLES} from './data-with-examples'
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import Examples from "./components/Examples";

function App() {

  return (
    <div>
      <Header />
      <main>
          <CoreConcepts />
          <Examples />
          <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
