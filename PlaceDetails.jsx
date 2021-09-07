import React from 'react';
import {Box ,Typography ,Card ,CardElement ,Chip ,Button ,CardMedia ,CardContent ,CardActions} from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

//local files
import useStyles from './Styles.js';

const PlaceDetails = ({place}) => {

  const classes = useStyles();

    return (
       
      <Card elevation={6}>
         <CardMedia
            style={{height:350}}
            image={place.photo ? place.photo.images.small.url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/SimpleRestaurantMinsk.jpg'}
            title={place.name}
         />
         <CardContent>
              <Typography gutterBottom variant="h5">{place.name}</Typography>
              <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Price</Typography>
                  <Typography variant="subtitle1">{place.price_level}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Ranking:-</Typography>
                  <Typography variant="subtitle1"> {place.ranking}</Typography>
              </Box>

              <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Rating</Typography>
                  <Typography variant="subtitle1"> {place.rating}</Typography>
              </Box>
              <Box>
              {place?.awards?.map((award) => {
                  <Box my={1} display="flex" justifyContent="space-betwwen" alignItems="center">
                      <img src={award.images.small} alt={award.display_name}/>
                      <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                  </Box>
              })}
              </Box>
              <Box>
              {place?.cuisine?.map(({name})=>{
                  <Chip key={name} size="small" label={name} className={classes.chip}/>
              })}
              </Box>
         </CardContent>
      </Card>
    )
}

export default PlaceDetails
