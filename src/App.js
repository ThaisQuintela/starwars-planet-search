import React, { useContext } from 'react';
import './App.css';
import Table from './components/Table';
import FilterForm from './components/FilterForm';
import starwars from './images/Star_Wars_silhouette_Olly_Moss_artwork.jpg';
import StarWarsContext from './context/StarWarsContext';
import logo from './images/star-wars-logo.svg';
import Loading from './components/Loading';

function App() {
  const { isLoading } = useContext(StarWarsContext);

  return (
    isLoading ? <Loading />
      : (
        <main>
          <img src={ logo } alt="Logo Star Wars" className="logo" />
          <img src={ starwars } alt="Jedi" className="starwars" />
          <FilterForm />
          <Table />
        </main>
      )
  );
}

export default App;
