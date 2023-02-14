import React, { useState } from 'react';

import { useEffect } from 'react';
import Card from './components/Card'
import { MdDarkMode } from 'react-icons/md'
import { FcSearch } from 'react-icons/fc'
import './App.css'
function App() {

  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('');
  const [makeout, setMakeout] = useState('');
  const [darkMode, setDarkMode] = useState(false)



  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then((data) => {
        setCards(data)
      })
  }, [])



  return (
    <div className={darkMode ? "dark-mode-bg" : "light-mode-bg"}>
      <header>
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-6 col-md-4 col-lg-3 mt-3">
              <div className='wherein'>
                <h5 className={darkMode && "dark-mode-words"}>Where in the world</h5>
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mt-3">
              <div className='darkmode d-flex justify-content-evenly align-items-center' onClick={() => setDarkMode(!darkMode)}>
                <MdDarkMode className={darkMode && "dark-mode-words"} />

                <span className={darkMode && "dark-mode-words"}>Dark Mode</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className='container mt-3 mb-4'>
        <div className='row d-flex justify-content-between'>
          <div className='col-6 col-md-4 col-lg-3'>
            <form className={darkMode ? "dark-mode-cards d-flex justify-content-evenly align-items-center" : "d-flex justify-content-evenly align-items-center"}>
              <FcSearch/>
              <input className={darkMode && "dark-mode-cards light-mode-words"} type="text" id="fname" placeholder="Search for a country..." onChange={(e) => setSearch(e.target.value)} />
            </form>
          </div>
          <div className='col-5 col-md-3 col-lg-2'>
            <select className={darkMode && "dark-mode-cards light-mode-select"} onChange={(e) => {
              const selectedRegion = e.target.value;
              setMakeout(selectedRegion);
            }}>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>

            </select>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row d-flex justify-content-between'>
          {

            cards.filter((c) => {
              return search.toLowerCase() === '' ? c : c.name.official.toLowerCase().includes(search)
            }).filter((c) => {
              return c.region.includes(makeout);
            }).map((c) => (

              <Card key={c.car.ccn3} img={c.flags.png} title={c.name.official} people={c.population} region={c.region} capital={c.capital} darkMode={darkMode}/>

            ))

          }
        </div>
      </div>
    </div>
  );
}

export default App;
