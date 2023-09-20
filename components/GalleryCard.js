import React from 'react';
import {
    Box,
    Flex,
    Image,
    Text,
    Heading,
    VStack,
    LinkOverlay
} from "@chakra-ui/react";
// import { MotionBox } from '../pages/utils/motion';
import {motion} from 'framer-motion';
import Paragraph from './Paragraph';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';

const MotionBox = motion(Box);

export const GalleryCard = ({ konten }) => (
    <MotionBox whileHover={{ y: -5 }}>
        <Box
            p={4}
            display={{ md: "flex" }}
            borderWidth={1}
            margin={2}
            rounded={'10px'}
            _hover={{
                borderColor: "blue.500",
            }}
        >
            {/* <Flex
                alignItems="center"
                justifyContent="space-around"
                direction={{ base: 'column', md: 'row' }}
            > */}
                <Image
                    margin="auto"
                    src={konten.imageUrl}
                    alt={konten.alt}
                    objectFit={'cover'}
                    boxSize={['200px', '200px', '200px', '200px']}
                />
            {/* </Flex> */}
        </Box>
    </MotionBox>

)
