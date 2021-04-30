import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Provider from './context/Provider';
import starwars from './images/Star_Wars_silhouette_Olly_Moss_artwork.jpg';

function App() {
  return (
    <Provider>
      <main className="">
        <img src={ starwars } alt="Jedi" className="starwars" />
        <FilterForm />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
