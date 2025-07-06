import React from 'react';
import {
    Heading,
    SlideFade,
    Text,
    SimpleGrid,
} from "@chakra-ui/react";
import { GalleryCard } from '../components/GalleryCard';

export const GallerySection = ({ images }) => {
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
            <Text fontSize={'lg'}>
                Desain yang telah saya buat
            </Text>

            <SimpleGrid columns={[1, 2, 3, 4]} mt={5}>
                {images.map((konten) => (
                    <GalleryCard
                        key={konten.public_id} // Menggunakan public_id sebagai key
                        konten={konten}
                    />
                ))}
            </SimpleGrid>
        </SlideFade>
    );
};
