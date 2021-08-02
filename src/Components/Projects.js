import React from 'react'
import { Box,  Heading, Flex, Image, Stack,  useColorMode, useMediaQuery } from '@chakra-ui/react'
import Moviedb from '../Assets/Moviedb.png'
import Newzer from '../Assets/Newzer.png'
import Allbirds from '../Assets/allbirds.png'


const Projects = () => {
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
          <Heading mb={ isNotSmallerScreen ? "0px" : "30px"} bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" alignSelf="center" size="3xl"  fontWeight="semibold"  >Projects</Heading>

        <Flex  direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start" >
        <Box cursor="pointer" onClick={() => window.open("https://newzer.vercel.app/")} mb={ isNotSmallerScreen ? "0px" : "30px"} mr={ isNotSmallerScreen ? "20px" : "0px"} maxW="lg"  borderWidth="0px" borderRadius="sm" overflow="hidden" >
      <Image p="2" src={Newzer} width="100%" alt="none" />

      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" letterSpacing="wide" fontSize="xl" fontStyle="italic"  ml="2" >
            Newzer
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color={ isDark ? "gray.300" :"gray.600"} fontStyle="italic"  fontSize="sm">
             Newzer is a news reading and gathering website which can filter news on paramerters like language, category, country etc. Specific search results can also be gathered. Read more functionality for getting more articles and news. 
          </Box>
        </Box>
      </Box>
    </Box>
    <Box cursor="pointer" onClick={() => window.open("https://reactmoviedb.vercel.app/")} mb={ isNotSmallerScreen ? "0px" : "30px"} mr={ isNotSmallerScreen ? "20px" : "0px"} maxW="lg"  borderWidth="0px" borderRadius="sm" overflow="hidden" >
      <Image p="2" src={Moviedb} width="100%" alt="none" />

      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" letterSpacing="wide" fontSize="xl"fontStyle="italic"  ml="2" >
            Movie DB
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color={ isDark ? "gray.300" :"gray.600"} fontSize="sm">
             Movie DB is a website for searching and finding movies and web-series. Dynamic search functionality helps in finding for movies/series which might not have been known otherwise. Provinding all research for binge watching. 
          </Box>
        </Box>
      </Box>
    </Box>
    <Box cursor="pointer" onClick={() => window.open("/")} maxW="lg"  borderWidth="0px" borderRadius="sm" overflow="hidden" >
      <Image p="2" src={Allbirds} width="100%" alt="none" />

      <Box p="3">
        <Box d="flex" alignItems="baseline">
          <Box fontWeight="semibold" letterSpacing="wide" fontSize="xl" fontStyle="italic" ml="2" >
            AllBirds
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color={ isDark ? "gray.300" :"gray.600"} fontSize="sm">
             An E-commerce Shoe for buying all your shoes. It is a single platform which offers shoes for all genders. Products provided are always quality measured. With facilities like quick checkout with minimal requirement for personal details.
          </Box>
        </Box>
      </Box>
    </Box>
        </Flex>
        <hr />
    </Stack>
    )
}

export default Projects
