import React from 'react';
import {
    Heading,
    SlideFade,
    Box,
    Text,
    Image,
    Stack,
    Flex,
    Button,
    useColorModeValue,
    SimpleGrid
} from "@chakra-ui/react";
import StackCard from '../components/StackCard';
import { gallery, techStacks } from '../constant';
import { GalleryCard } from '../components/GalleryCard';

export const GallerySection = ({ konten }) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
                fontFamily='Nathan'
            >
                Gallery
            </Heading>
            <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>
                Desain yang telah saya buat
            </Text>

            <SimpleGrid columns={[1, 2, 3, 4]} mt={5}>
                {gallery.map((konten) => {
                    return (
                        <GalleryCard
                            key={konten.name}
                            konten={konten}
                        />
                    );
                })}

            </SimpleGrid>
        </SlideFade>
        
    )
}
