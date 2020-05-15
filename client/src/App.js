import React from 'react';
import ButtonAppBar from './Components/AppBar'
import GameList from './Components/GameList'
import CustomList from './Components/CustomList/CustomList'



function App() {
  return (
    <div className="App">
      <ButtonAppBar title='Game App' color='blue' />

      <CustomList/>
    </div>
  );
}

export default App;
