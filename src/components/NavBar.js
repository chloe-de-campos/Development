
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

   props.selectSortStyle(event.target.value);
  };

  function resetFilters () {
    if(!allFilters){
      setAllFilters(true)
      props.updateFilters({diet: [], legs:[]})
    }
  }


  function updateDiet (newDiet) {
    const oldFilters = props.filters.diet
    const oldLegFilters =props.filters.legs
   
    var found = new Boolean(false)
    
    for (let i = 0; i < oldFilters.length; i++){
      if (oldFilters[i]==newDiet) {

        found = true
        oldFilters.splice(i,1)

        props.updateFilters({diet: oldFilters, legs:oldLegFilters})
      }
    }

    if (found == false){
      oldFilters.push(newDiet)
      props.updateFilters({diet: oldFilters, legs:oldLegFilters})
    }

    if(oldFilters.length === 0){
      setAllFilters(true)}
    else{
      setAllFilters(false);
    }
   
  }

  function updateLegs (newLegs) {
    const oldFilters = props.filters.legs
    const oldDietFilters =props.filters.diet
    var found = new Boolean(false)

    for (let i = 0; i < oldFilters.length; i++){
      if (oldFilters[i]==newLegs) {
        found = true
        oldFilters.splice(i,1)
        props.updateFilters({diet: oldDietFilters, legs:oldFilters})
      }
    }

    if (found == false){
      oldFilters.push(newLegs)
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
      



    <div style={{"display": "flex", "align-items":"flex-start", "flex-direction": "column", "justify-content": "space-around", "margin":"20%", "width":"max-content"}}>
    
    <div style={{"margin-bottom":"20px"}} >
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
      <h5 style={{"margin-bottom": "-2px"}}>Filter by Diet</h5>
      <div style={{"display":"flex", "flex-direction":"column"}}>
        {/* <FormControlLabel control={
            <Checkbox 
                checked={allFilters}
                onChange={(event) =>
                  
                    resetFilters()
                  
                }
                />
          } label="All" /> */}
        <FormControlLabel 
        control={
            <Checkbox 
                onChange={(event) =>
                  updateDiet("Carnivore")
                }
                />
          } label="Carnivore" />
        <FormControlLabel style={{"margin-top": "-10px"}}
        control={
            <Checkbox 
                onChange={(event) =>
                  updateDiet("Omnivore")
                }
                />
          } label="Omnivore" />
        <FormControlLabel style={{"margin-top": "-10px"}}
        control={
          <Checkbox 
              onChange={(event) =>
                updateDiet("Herbivore")
              }
              />
        } label="Herbivore" />
          
        
      </div>
      </div>

      <div style={{"margin-top": "30px"}}>
        <h5 style={{"margin-bottom": "-2px"}}>Filter by Leg Count</h5>
        <div style={{"display":"flex", "flex-direction":"column"}}>
      
        <FormControlLabel
        control={
            <Checkbox 
                onChange={(event) =>
                  updateLegs(2)
                }
                />
          } label="Two Legs" />
        <FormControlLabel style={{"margin-top": "-10px"}}
        control={
            <Checkbox 
                onChange={(event) =>
                  updateLegs(4)
                }
                />
          } label="Four Legs" />
        <FormControlLabel style={{"margin-top": "-10px"}}
        control={
          <Checkbox 
              onChange={(event) =>
                updateLegs(8)
              }
              />
        } label="More Legs" />
          
          </div>
      </div>
        </div> 
        
  </div>
  )
}

