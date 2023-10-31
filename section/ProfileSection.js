import React from 'react';
import { SlideFade, Box, Heading, Avatar, Image, Link, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';


const ProfileSection = ({song}) => {
    return (
        <SlideFade in offsetX={80}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        fontSize={{ base: '28px', md: '40px', lg: '68px' }}

                        fontFamily='Nathan'
                        fontWeight='normal'
                    >
                        Halo, Saya Hendra
                        {/* <span className="waving-hand">👋</span> */}
                    </Heading>
                </Flex>
                <Paragraph fontSize="2xl" lineHeight={1.6} >
                    Freshgraduate S1 Teknik Informatika
                </Paragraph>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Berfokus pada {" "}
                    <Link color={useColorModeValue("white.500", "white.400")} href="https://id.wikipedia.org/wiki/Situs_web" fontWeight="500" fontFamily='Nathan' isExternal>
                        Website,
                    </Link>{" "}
                    <Link color={useColorModeValue("white.500", "white.400")} href="https://www.javascript.com/" fontWeight="500" fontFamily='Nathan' isExternal>
                        Javascript &
                    </Link>{" "}
                    <Link color={useColorModeValue("white.500", "white.400")} href="https://www.php.net/" fontWeight="500" fontFamily='Nathan' isExternal>
                        PHP
                    </Link>.
                    {"\n"}Memiliki minat pada Software Engineer.{" "}
                    {/* <Link color={useColorModeValue("blue.500", "blue.400")} href="https://id.wikipedia.org/wiki/Situs_web" fontWeight="500" isExternal>
                        Website
                    </Link>. 🔥 */}
                </Paragraph>
            </Box>
        </SlideFade >
    )
}

export default ProfileSection;
