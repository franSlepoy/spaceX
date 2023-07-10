import { Link, useParams } from 'react-router-dom'
import * as API from "../services/launches"; 
import { useState, useEffect } from 'react';
import { Box, Button, Card, CardBody,Heading, Image, Stack, Text } from '@chakra-ui/react';


const LaunchDetail = () => {
    const [launch, setLaunch] = useState([]);
    const {launchId} = useParams(); 
    
    useEffect(()=>{
     API.getLaunchByFlightNumber(launchId)
     .then( setLaunch)
     .catch(err => console.log(err));
     
    }, [launchId]);
    
    

    
  return (
    <>
<Box display={"flex"}  justifyContent={"center"} >
<Card
  
  width={600}
  direction={{ base: 'column', sm: 'row'  }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://media.diariolasamericas.com/p/b93c871eed76900fdfe947951bce64eb/adjuntos/216/imagenes/002/534/0002534685/cohete-artemis-1.jpg'
    alt=''
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{launch.mission_name}</Heading>

      <Text py='2'>
        {launch.details}
      </Text>
    </CardBody>

    
  </Stack>
</Card>
</Box>

<Box display={"flex"}  justifyContent={"center"} >
<Link to={"/"}>
<Button justifyContent={"center"} mt={55}> 
    Volver
 </Button>
</Link>
</Box>
 </>
    
    
            
    
   
  )
}

export default LaunchDetail
