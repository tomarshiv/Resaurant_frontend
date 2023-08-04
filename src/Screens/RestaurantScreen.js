import * as React from "react";
import { Grid, TextField,Button, Select } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
import Heading from "../Component/Heading";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { UploadFile } from "@mui/icons-material";
import { serverURL,getData, postData } from "../Services/FetchNodeServices";
import { useEffect,useState } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "gray",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  Box: {
    width: "60vw",
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
  },
});

export default function RestaurantScreen() {
  var classes = useStyles();
  const [states,setStates]=useState([])
  const [cities,setCities]=useState([])
  const [stateId,setStateId]=useState([])
  
  const fetchAllStates=async()=>{
    var result=await getData('statecity/fetch_all_states')
    // console.log(result.data)
    setStates(result.data)
    

  }

 const fillState=()=>{
        return states.map((item)=>{
        return  <MenuItem value={item.stateid}>{item.statename}</MenuItem>
        })

    }

    
 const fillCity=()=>{
  return cities.map((item)=>{
  return  <MenuItem value={item.cityid}>{item.cityname}</MenuItem>
  })

}


    const fetchAllCity=async(stateId)=>{
      var body={stateid:stateid} 
      var result =await postData('statecity/fetch_all_cities',{body})
      console.log(result.data)
      setCities(result.data)
    }


    const handleCityChange=(event)=>{
      setStateId(event.target.value)
      fetchAllCity(event.target.value)
    }

   useEffect(function(){
    fetchAllStates()

  },[])

  return (
    <div className={classes.root}>
      <div className={classes.Box}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Heading title={"Restaurant  Register"} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Restaurant Name" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField id="outlined-basic" label="Owner Name" fullWidth />
          </Grid>

          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Phone Number" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Mobile Number" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Email Address" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-basic" label=" Address" fullWidth />
          </Grid>

          <Grid item xs={4}>
          <FormControl fullWidth>
          <InputLabel>State</InputLabel>
          <Select  value={stateId} onChange={handleCityChange}>
          <MenuItem>---Select State--</MenuItem>
            {fillState()}
           </Select>
          </FormControl>
          </Grid>
          <Grid item xs={4}>
          <FormControl fullWidth>
          <InputLabel>City</InputLabel>
          <Select>
          {/* <MenuItem value={10}>Ten</MenuItem> */}
          {fillCity()}
        
          </Select>
          </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="URL" fullWidth />
          </Grid>

          
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="Fssi Number" fullWidth />
          </Grid>
          <Grid item xs={4}>
            <TextField id="outlined-basic" label="GST Number" fullWidth />
          </Grid>
          <Grid item xs={4}>
          <FormControl fullWidth>
          <InputLabel>GST Type</InputLabel>
          <Select>
          <MenuItem>-Select Gst Type-</MenuItem>
                  <MenuItem>5 Star</MenuItem>
                  <MenuItem>Other</MenuItem>
                </Select>
       
          </FormControl>
          </Grid>


          <Grid item xs={4}>
          <Button component ="label" variant="contained" endIcon={<UploadFile/>} fullWidth>
            <input hidden
            accept="image"
            type="file"
            />
            UPLOAD FSSAI
          </Button>
           
          </Grid>
          <Grid item xs={4}>
          <Button component ="label" variant="contained" endIcon={<UploadFile/>} fullWidth>
            <input hidden
            accept="image"
            type="file"
            />
            UPLOAD SHOP ACT
          </Button>
          
          </Grid>
          <Grid item xs={4}>
          <Button component ="label" variant="contained" endIcon={<UploadFile/>} fullWidth>
            <input hidden
            accept="image"
            type="file"
            />
            UPLOAD LOGO
          </Button>
          </Grid>
          <Grid item xs={6}>
          <Button component ="label" variant="contained"  fullWidth> Submit</Button>
          </Grid>
          <Grid item xs={6}>
          <Button component ="label" variant="contained"  fullWidth>Reset</Button>
          </Grid>

        </Grid>
      </div>
    </div>
  );
}
