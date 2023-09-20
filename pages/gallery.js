import React from "react";

import { Container, Divider} from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { Grid, Box,Flex, HStack } from '@chakra-ui/react';
import { GallerySection } from "../section/GallerySection";


const Gallery = () =>{


    return (
        <div className={styles.container}>
          <Head>
            <title>Hendra</title>
            <meta property="og:title" content="Hendra"></meta>
            <meta name="description" content="Hendra" />
            <link rel="icon" href="/handjock.png" />
          </Head>
    
          <main>
            <Container maxW="container.lg" mt={['20', '20']} mb={['5', '10']}>
              <HStack spacing="8" display={{ md: 'flex' }} alignItems={'flex-start'} justifyContent='space-between'>
                <Box width={'auto'}>
                  {/* <ProfileSection song={data}/> */}
                  <GallerySection />
                  <Divider my={7} />
                  
                  {/* <Divider my={7} /> */}
                  {/* <LiveProjectSection /> */}
                </Box>
                {/* <Box maxW={'sm'} display={{  }}>
                  <TechStackSection />
                </Box>   */}
              </HStack>
            </Container>
          </main>
        </div>
      )
}
export default Gallery;