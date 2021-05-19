import React from 'react';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import Provider from './context/Provider';
import starwars from './images/Star_Wars_silhouette_Olly_Moss_artwork.jpg';
import logo from './images/star-wars-logo.svg';

function App() {
  return (
    <Provider>
      <main>
        <img src={ logo } alt="Logo Star Wars" className="logo" />
        <img src={ starwars } alt="Jedi" className="starwars" />
        <FilterForm />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
