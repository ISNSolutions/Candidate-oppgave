import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { IShip } from './Models/IShip';
import { fetchData } from './DataProvider/fetchData';

const App = () => {
  const [ships, setShips] = useState<IShip[]>([]);

  useEffect(()=>{
    fetchData.getShips().then(_=>setShips(_))
  },[])

  return (
    <div className={styles.apps365Candidate}>
      <h1> Ships </h1>
      {ships.map(_=>{
        return <ShipCard ship={_} />
      } )}    
    </div>
  );
}

export default App;

const ShipCard = (props:{ ship: IShip})=>{
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className="ms-Grid-col ms-sm12">
          <span className={styles.title}>{props.ship.title}</span>
        </div>
      </div>
      <div className={styles.row + " " +styles.subTitle}>
        <div className={styles.column4}>
          <div>Code: {props.ship.shipCode}</div>
        </div >
        <div className={[styles.column4,styles.description].join(" ")}>
          <div >Year: {props.ship.dateBuilt}</div>
        </div >
        <div className={styles.column4}>
          <div >Flag: {props.ship.codeFlag}</div>
        </div >
      </div >
    </div >
  );
}