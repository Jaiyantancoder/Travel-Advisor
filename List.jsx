import React ,{useState} from 'react';
import {CircularProgress ,Select ,Typography ,Grid ,InputLabel ,MenuItem ,FormControl} from '@material-ui/core';

//local files
import useStyles from './Styles.js';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {

    const classes = useStyles();

    //creating state variables 
    const [type ,setType]  = useState('restaurants');
    const [rating ,setRating]  = useState('');

    return (
        
        <div className={classes.container}>
           <Typography variant="h4">Restaurants,Hotels & Attractions near you</Typography>
           <FormControl className={classes.formControl}>
               <InputLabel>Type</InputLabel>
               <Select vlaue={type} onChange={(e)=> setType(e.target.value)}>
                   <MenuItem value="restaurants">Restaurants</MenuItem>
                   <MenuItem value="hotels">Hotels</MenuItem>
                   <MenuItem value="attractions">Attractions</MenuItem>
               </Select>
           </FormControl>
           <FormControl className={classes.formControl}>
               <InputLabel>Rating</InputLabel>
               <Select vlaue={rating} onChange={(e)=> setRating(e.target.value)}>
                   <MenuItem value={0}>All</MenuItem>
                   <MenuItem value={3}>Above 3.0</MenuItem>
                   <MenuItem value={4}>Above 4.0</MenuItem>
                   <MenuItem value={4.5}>Above 4.5</MenuItem>
               </Select>
           </FormControl>

           <Grid container spacing={3} className={classes.title}>
               {places?.map((place ,i)=>(
                   <Grid item key={i} xs={12}>
                      <PlaceDetails place={place}/>
                   </Grid>    
               ))}
           </Grid>
        </div>
    )
}

export default List
