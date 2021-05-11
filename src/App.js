import React, { Suspense } from 'react';
import Routes from './routing/routes';

function App() {

  // Dark mode
  const hours = new Date().getHours();
  
  // 9pm to 7am
  if(hours >= 21 && hours <= 7) {
    document.body.classList.add('dark');
  } else if(hours > 7 && hours < 21) {
    document.body.classList.remove('dark');
  };

  return (
    <Suspense fallback={<></>}>
      <div className="App">
        <Routes />
      </div>
    </Suspense>
  );
}

export default App;
