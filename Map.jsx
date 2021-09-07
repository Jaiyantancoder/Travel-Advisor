import React from 'react';
import  GoogleMapReact from 'google-map-react';
import {Paper ,Typography ,useMediaQuery} from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

//local files
import useStyles from './Styles.js'

const Map = ({setBounds ,setCoords ,coords}) => {

   const classes = useStyles();
   const isMobile = useMediaQuery('(min-width:600px)') 
   const coordinates = {lat:0 ,lng:0}
    return (
        <div className={classes.mapContainer}> 
            <GoogleMapReact
                  bootstrapURLKeys={{key: 'AIzaSyAZ-1yEujCZjk1mMIAZypig6pm7j09S5Ls'}}
                  defaultCenter={coords}
                  center={coords}
                  defaultZoom={14}
                  margin={50, 50, 50, 50}
                  options={''}
                  onChange={(e) => {
                    setCoords({ lat:e.center.lat, lng: e.center.lng });
                    setBounds({ ne:e.marginBounds.ne, sw: e.marginBounds.sw });
                  }}
                  onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}

export default Map
