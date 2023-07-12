import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getFuelTypes } from './repository/repository';
import { FuelTypeList } from './components/FuelTypeList';



export default function App() {


  return (
    <div className="App">
      <h1>Elexon EnergyBoard</h1>

      <div className="sidenav">

        

        <FuelTypeList/>


      </div>
    </div>
  );
}
