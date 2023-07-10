import { useEffect, useState } from 'react';
import './App.css'
import * as API from "./services/launches"; 
import { Box, Image } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import LaunchList from './components/LaunchList';
import LaunchDetail from './components/LaunchDetail';

export function App() {
 const [launches, setLauches] = useState([]);
 
 useEffect(()=>{
  API.getAllLaunches().then(setLauches);
 }, []);

  return (
    <>
    <Box m={5} display="flex" justifyContent={"center"}>
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ElxFkkkftvaypgtfQr2__ug8TZ2ugH5hHw&usqp=CAU" alt='cohete' width={300} borderRadius={5} />
    </Box>
    
    <Routes>
      <Route path='/' element={<LaunchList/>} />
      <Route path='/launch/:launchId' element={<LaunchDetail/>} />
    </Routes>
   </>
  )
}

export default App
