import React ,{useState,useEffect} from 'react';
import {CssBaseline ,Grid} from '@material-ui/core';

//local files
import {getPlacesData} from './api';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
   
   const [places ,setPlaces] = useState([]);
   const [coords ,setCoords] = useState({});
   const [bounds ,setBounds] = useState({})

   useEffect(()=>{
       navigator.geolocation.getCurrentPosition(({coords:{latitude ,longitude}}) => {
          setCoords({lat:latitude ,lng:longitude})
       })
   },[])


   useEffect(()=>{
      console.log(bounds.sw)
       getPlacesData(bounds.sw ,bounds.ne)
            .then((data)=>{
            console.log(data)
            setPlaces(data)
         })
   },[coords ,bounds])
  return (
    <>
       <CssBaseline/>
       <Header/>
         <Grid container spacing={3} style={{ width:'100%' }}>
            <Grid item xss={12} md={4}>
               <List places={places}/>
            </Grid>

            <Grid item xss={12} md={8}>
               <Map
                  setCoords={setCoords}
                  coords={coords}
                  setBounds={setBounds}
               />
            </Grid>
         </Grid>
    </>
  )
}

export default App
