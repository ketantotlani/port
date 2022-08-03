import { Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <VStack  p={5} >
            <Flex direction="row" >
            <Text  mt={6}>Copyright © 2022 
            <Text as="Citation" fontWeight="semibold"  bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text"> Ketan Totlani </Text> </Text>


                {/* <Text mt={6}>Made By Ketan Totlani With Chakra UI</Text> */}
            </Flex>
        </VStack>
    )
}
