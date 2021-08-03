import { Box, Button, Circle, Flex, Image, Stack, Text, useColorMode, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
    const {colorMode} = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            { isNotSmallerScreen ?   <Circle  position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/> : "" }
            <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start" >
                <Box marginBottom="20" mt={isNotSmallerScreen ? "6" : 16 } align="flex-start">
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" mt="-2" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Ketan Totlani</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>{"{Front End Developer}"}</Text>
                    <Button mt={8} colorScheme="blue" onClick={() => document.getElementById('about').scrollIntoView()} >Know More</Button>
                </Box>
                <Image zIndex="1" alignSelf="center" ml={isNotSmallerScreen ? "12" : "0"} mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/43614859?v=4" />
            </Flex>
            <hr />
        </Stack>
    )
}
