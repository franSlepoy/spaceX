import React from 'react'
import { useState, useEffect } from 'react';
import LaunchItem from './LaunchItem';
import * as API from "../services/launches"; 
import { Box, Heading } from '@chakra-ui/react';

const LaunchList = () => {
    const [launches, setLaunches] = useState([]);
 
    useEffect(()=>{
     API.getAllLaunches()
     .then(setLaunches)
     
    }, []);
  return (
    <Box sx={{display: "flex", flexDirection:"column", alignItems:"center"   }}>
      <Heading m={5} textAlign={"center"}>
    <h1>SpaceX Launches</h1>
    </Heading>
      
      
       
        {launches.map(launch=> (
          <LaunchItem key={launch.flight_number} {...launch}/>
        ))}
    </Box>
  )
}

export default LaunchList
