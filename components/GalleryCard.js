import React from 'react';
import {
    Box,
    Image,
} from "@chakra-ui/react";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const GalleryCard = ({ konten }) => (
    <MotionBox whileHover={{ y: -5 }}>
        <Box
            p={4}
            borderWidth={1}
            margin={2}
            rounded={'10px'}
            _hover={{
                borderColor: "blue.500",
            }}
        >
            <Image
                margin="auto"
                src={konten.url} // Menggunakan url dari konten
                alt={konten.alt} // Menggunakan alt dari konten
                objectFit={'cover'}
                boxSize={['200px', '200px', '200px', '200px']}
            />
        </Box>
    </MotionBox>
);
