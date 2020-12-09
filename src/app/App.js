import React from 'react';

import Body from './components/body';
import Footer from './components/footer';
import Panel from './components/panel';

function App() {
  return (
    <div id="wrapper">
      <Panel />
      <Body />
      <Footer />
    </div>
  );
}

export default App;