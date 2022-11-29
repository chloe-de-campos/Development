
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { chainPropTypes } from '@mui/utils';
import { formLabelClasses } from '@mui/material';
import { useState } from 'react';

import * as React from 'react';



export default function NavBar(props) {

  const [allFilters, setAllFilters] = useState(true)

  const handleChange = (event) => {
    console.log('event', event)
    console.log('event.target.value', event.target.value)
   props.selectSortStyle(event.target.value);
  };

  function resetFilters () {
    if(!allFilters){
      setAllFilters(true)
      props.updateFilters({diet: [], legs:[]})
    }
  }

  // //sets the state to the selected type, function passed to the onSelect event handler of HTML buttons
  // function updateFilters (typetype) {

  //   const oldFilters = props.filters
  //   var found = new Boolean(false)
    
  //   console.log('oldFilters', oldFilters)
  //   for (let i = 0; i < oldFilters.length; i++){
  //     if (oldFilters[i]==typetype) {
  //       console.log('found')
  //       found = true
  //       oldFilters.splice(i,1)
  //       console.log(oldFilters)
  //       props.updateFilters(oldFilters)
  //     }
  //   }

  //   if (found == false){
  //     oldFilters.push(typetype)
  //     console.log(oldFilters)
  //     props.updateFilters(oldFilters)
  //   }

  //   if(oldFilters.length === 0){
  //     console.log("NO FILTERS")
  //     setAllFilters(true)}
  //   else{
  //     console.log("FILTERS")
  //     setAllFilters(false);
  //   }
        
  // }

  function updateDiet (newDiet) {
    const oldFilters = props.filters.diet
    const oldLegFilters =props.filters.legs
     console.log('updating Diet! old diet: ', oldFilters)
     console.log('updating Diet! old legs: ', oldLegFilters)
    var found = new Boolean(false)
  
    console.log('oldFilters', oldFilters)

    
    for (let i = 0; i < oldFilters.length; i++){
      if (oldFilters[i]==newDiet) {
        console.log('found')
        found = true
        oldFilters.splice(i,1)
        console.log("updating to", oldFilters)
        props.updateFilters({diet: oldFilters, legs:oldLegFilters})
      }
    }

    if (found == false){
      oldFilters.push(newDiet)
      console.log(oldFilters)
      props.updateFilters({diet: oldFilters, legs:oldLegFilters})
    }

    if(oldFilters.length === 0){
      console.log("NO FILTERS")
      setAllFilters(true)}
    else{
      console.log("FILTERS")
      setAllFilters(false);
    }
    console.log('updating Diet! new legs: ', props.filters.legs)
  }

  function updateLegs (newLegs) {
    const oldFilters = props.filters.legs
    const oldDietFilters =props.filters.diet
     console.log('updating Legs! old diet: ', oldDietFilters)
     console.log('updating Legs! old legs: ', oldFilters)
    var found = new Boolean(false)
  
    console.log('oldFilters', oldFilters)
    
    for (let i = 0; i < oldFilters.length; i++){
      if (oldFilters[i]==newLegs) {
        console.log('found')
        found = true
        oldFilters.splice(i,1)
        console.log("updating to", oldFilters)
        props.updateFilters({diet: oldDietFilters, legs:oldFilters})
      }
    }

    if (found == false){
      oldFilters.push(newLegs)
      console.log("NEW LEGS NOW FILTERS ARE " , oldFilters)
      props.updateFilters({diet: oldDietFilters, legs:oldFilters})
    }

    if(oldFilters.length === 0){
      console.log("NO FILTERS")
      setAllFilters(true)}
    else{
      console.log("FILTERS")
      setAllFilters(false);
    }
    console.log('updating Diet! new legs: ', props.filters.legs)
  }


  return (
    <div>
      <div style={{}} >

        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-simple-select-label">Sort</InputLabel>
          <Select
            value={props.sortStyle}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"alph"}>Alphabetically</MenuItem>
            <MenuItem value={"lth"}>Price: low to high</MenuItem>
            <MenuItem value={"htl"}>Price: high to low</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
      </div>






    <div>
      {/* <FormControlLabel control={
          <Checkbox 
              checked={allFilters}
              onChange={(event) =>
                
                  resetFilters()
                
              }
              />
        } label="All" /> */}
      <FormControlLabel control={
          <Checkbox 
              onChange={(event) =>
                updateDiet("Carnivore")
              }
              />
        } label="Carnivore" />
      <FormControlLabel control={
          <Checkbox 
              onChange={(event) =>
                updateDiet("Omnivore")
              }
              />
        } label="Omnivore" />
      <FormControlLabel control={
        <Checkbox 
            onChange={(event) =>
              updateDiet("Herbivore")
            }
            />
      } label="Herbivore" />
        
      
    </div>

    <div>
     
      <FormControlLabel control={
          <Checkbox 
              onChange={(event) =>
                updateLegs(2)
              }
              />
        } label="Two Legs" />
      <FormControlLabel control={
          <Checkbox 
              onChange={(event) =>
                updateLegs(4)
              }
              />
        } label="Four Legs" />
      <FormControlLabel control={
        <Checkbox 
            onChange={(event) =>
              updateLegs(8)
            }
            />
      } label="More Legs" />
        
      
    </div>

        
  </div>
  )
}

