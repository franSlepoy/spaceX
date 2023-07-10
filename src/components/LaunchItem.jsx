import React from 'react'
import { Box, Button, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const LaunchItem = (launch) => {
  return (
    <section>
          <Box  bg="ButtonShadow" padding={4} m={4} borderRadius={5} width={400}>
            <Flex display={"flex"}>
              <Text bg={"ButtonHighlig"}>
                Mission <strong>{launch.mission_name}</strong>
              </Text>
              <Spacer/>
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                  {launch.launch_success ? "Success" : "Failuro"}
                </Tag>
            </Flex>
            
            <Flex align={"center"}>
            <AiOutlineCalendar/> 
             <Text fontSize="sm" ml={1} >
                 {launch.launch_date_local.split("T")[0]}
             </Text>  
            </Flex>
            <Link to={`/launch/${launch.flight_number}`}>
             <Button p={2} margin={3} colorScheme="orange">
               Más Info
             </Button>
            </Link>
            
          </Box >
          </section>
  )
}

export default LaunchItem
