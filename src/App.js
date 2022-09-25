import React from 'react';
import {

  VStack,
  Flex,
  IconButton,
  useColorMode,
  Spacer,
} from '@chakra-ui/react';
import {FaSun, FaMoon,  FaGithub, FaLinkedin,  FaTwitter}  from 'react-icons/fa'
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact'
import Footer from './Components/Footer';

function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === "dark";
  return (
      <VStack p={5}>
        <Flex w="100%">
          {/* <Heading ml="8" size="md" fontWeight="semibold" color="white.400" >Ketan Totlani</Heading> */}
          <Spacer></Spacer>
        <IconButton icon={<FaLinkedin/>} isRound="true" onClick={() => window.open("https://www.linkedin.com/in/ketantotlani/")}></IconButton>
        <IconButton ml={2} icon={<FaTwitter/>} isRound="true" onClick={() => window.open("https://twitter.com/ketantotlani_")}></IconButton>
        <IconButton ml={2} icon={<FaGithub/>} isRound="true" onClick={() => window.open("https://github.com/ketantotlani")}></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
        </Flex>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </VStack>
  );
}

export default App;
