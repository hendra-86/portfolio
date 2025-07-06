import React, { useEffect, useState } from "react";
import { Container, Divider, HStack, Box } from '@chakra-ui/react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GallerySection } from "../section/GallerySection";
// import {getImagesCloudinary} from '../constant/getImagesCloudinary';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from your API
    fetch('/api/cloudinary') // Ganti dengan endpoint API yang benar
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hendra</title>
        <meta property="og:title" content="Hendra" />
        <meta name="description" content="Hendra" />
        <link rel="icon" href="/handjock.png" />
      </Head>

      <main>
        <Container maxW="container.lg" mt={['20', '20']} mb={['5', '10']}>
          <HStack spacing="8" display={{ md: 'flex' }} alignItems={'flex-start'} justifyContent='space-between'>
            <Box width={'auto'}>
              <GallerySection images={images} />
              <Divider my={7} />
            </Box>
          </HStack>
        </Container>
      </main>
    </div>
  );
}

export default Gallery;
