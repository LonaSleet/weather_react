import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import './App.scss'

function App() {
  const [data, setData] = useState({});
  return (
    <div className="app">

      <header className="app__header">
        <Header setData={setData} />
      </header>

      <main className="app__main">
      <Main data={data} />
      </main>

    </div>
  );
}


export default App;
