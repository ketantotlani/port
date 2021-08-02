import React,{useState} from 'react'
import {  Button,Heading, Flex, FormControl,  Stack,   useMediaQuery, FormLabel, Input, FormHelperText, Textarea } from '@chakra-ui/react'
import { HiOutlineMail } from "react-icons/hi";
import emailjs from 'emailjs-com';

const Contact = () => {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    const [email, setSent] = useState(false);

    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm('Maingmail', 'maintemplate', e.target, 'user_Lekapwyr6f3Hslth1Q4d2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
          setSent(true);
    }

    return (
        <Stack w={isNotSmallerScreen ?"60%": "75%"}>
          <Heading mb={ isNotSmallerScreen ? "50px" : "30px"} bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text" alignSelf="center" size="3xl"  fontWeight="semibold"  >Contact</Heading>
          <form  onSubmit={sendEmail}>

        <Flex>
        <FormControl >
              <FormLabel>Name</FormLabel>
                <Input type="text" name="from_name" />
                <FormHelperText mb="5">Please enter your name.</FormHelperText>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="from_email" />
                <FormHelperText mb="5">Please enter your email.</FormHelperText>
                <FormLabel>Subject</FormLabel>
                <Input type="text" name="from_subject" />
                <FormHelperText mb="5">Topic of the conversation.</FormHelperText>
                <FormLabel>Message</FormLabel>
                <Textarea type="textarea" name="message" />
                <FormHelperText mb="5">Please write your message.</FormHelperText>
                {email ? <Button colorScheme="blue" variant="outline"  disabled >Sent</Button> : <Button leftIcon={<HiOutlineMail/>} type="submit" colorScheme="blue">Send </Button>}

        </FormControl>
        </Flex>
        </form>

        {/* <hr /> */}
        </Stack>
    )
}

export default Contact
