import React from 'react';
import { SlideFade, Box, Heading, Avatar, Image, Link, Flex, LightMode, ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import Paragraph from '../components/Paragraph';
// import { FaLinkedin, FaStackOverflow, FaMedium } from 'react-icons/fa';
// import { SiGmail } from 'react-icons/si';
// import { socialButtons, resume } from '../constant';
// import SocialButton from '../components/SocialButton';
// import {BiPhoneCall} from 'react-icons/bi';
// import SpotifySection from './SpotifySection';

const ProfileSection = ({song}) => {
    return (
        <SlideFade in offsetX={80}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between">
                    <Heading
                        as="h1"
                        fontSize={{ base: '28px', md: '40px', lg: '68px' }}

                        fontFamily='LittleLord'
                        fontWeight='normal'
                    >
                        Halo, Saya Hendra
                        {/* <span className="waving-hand">👋</span> */}
                    </Heading>
                    {/* <Flex alignItems={"flex-end"}>
                        <Avatar
                            name="HandJock"
                            src="/handjock.png"
                            mb={5}
                            size='lg'
                        />
                    </Flex> */}
                </Flex>
                <Paragraph fontSize="2xl" lineHeight={1.6} >
                    Freshgraduate S1 Teknik Informatika
                </Paragraph>
                <Paragraph fontSize="2xl" lineHeight={1.6}>
                    Berfokus pada {" "}
                    <Link color={useColorModeValue("blue.500", "blue.400")} href="https://id.wikipedia.org/wiki/Situs_web" fontWeight="500" isExternal>
                        Website,
                    </Link>{" "}
                    <Link color={useColorModeValue("blue.500", "blue.400")} href="https://www.javascript.com/" fontWeight="500" isExternal>
                        Javascript &
                    </Link>{" "}
                    <Link color={useColorModeValue("blue.500", "blue.400")} href="https://www.php.net/" fontWeight="500" isExternal>
                        PHP
                    </Link>.
                    {"\n"}Memiliki minat pada Software Engineer.{" "}
                    {/* <Link color={useColorModeValue("blue.500", "blue.400")} href="https://id.wikipedia.org/wiki/Situs_web" fontWeight="500" isExternal>
                        Website
                    </Link>. 🔥 */}
                </Paragraph>

                {/* <Box mt={5}>
                    <LightMode>
                        <ButtonGroup> */}
                            {/* <SocialButton
                                social={resume}
                            /> */}
                            {/* <Link href={'/contact'} style={{ textDecoration: 'none' }}>
                                <Button
                                    colorScheme="blue"
                                    size='sm'
                                    margin={'5px'}
                                    leftIcon={<BiPhoneCall color='white'/>}
                                >
                                    Contact Me
                                </Button>
                            </Link> */}
                        {/* </ButtonGroup>

                    </LightMode>
                </Box> */}

                {/* <SpotifySection song={song}/> */}
            </Box>
        </SlideFade >
    )
}

export default ProfileSection;
