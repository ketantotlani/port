import React from 'react'
import {  Heading,  Flex,  Stack, Text, useMediaQuery } from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,  FaGitAlt, FaNpm, FaNode, FaAws }  from 'react-icons/fa'



const About = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack id="about"  padding="5">
          <Heading  bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" alignSelf="center" size="3xl"  fontWeight="semibold"  >Skills</Heading>

         <Flex alignItems="center" direction={isNotSmallerScreen ? "row" : "column"} spacing="150px" p={isNotSmallerScreen ? "32" : "0"}  alignSelf="center" >

               <Text  fontSize="22px"  mt={isNotSmallerScreen ? "0" : "16"} ml={isNotSmallerScreen ? "10" : "0"} marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}> 
               <FaHtml5  fontSize="80px"/>HTML 5
               </Text>

              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}> 
               <FaCss3Alt  fontSize="80px"/>  CSS - 3
               </Text>

              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaJs  fontSize="80px"/> JavaScript
              </Text>

              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaBootstrap fontSize="80px"/>Bootstrap
              </Text>

              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaReact fontSize="80px"/>React Js
                </Text>
              
               <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaNode fontSize="80px"/> Node.Js
              </Text>
              
               <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaAws fontSize="80px"/> AWS
              </Text>

              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "16" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaGitAlt fontSize="80px"/> GitHub
              </Text>
              
              <Text fontSize="22px" marginRight={isNotSmallerScreen ? "0" : "0"} marginBottom={isNotSmallerScreen ? "0" : "16"}>
                <FaNpm fontSize="80px"/> NPM
              </Text>
        </Flex>
        <hr />
    </Stack>
    )
}

export default About
