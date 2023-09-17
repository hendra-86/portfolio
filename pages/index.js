import { Container, Divider} from '@chakra-ui/react'
import Head from 'next/head'
import { LiveProjectSection } from '../section/LiveProjectSection';
import ProfileSection from '../section/ProfileSection';
import TechStackSection from '../section/TechStackSection';
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { Grid, Box,Flex, HStack } from '@chakra-ui/react';

import React from 'react';


export default function Home() {

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR('/api/spotify', fetcher);

  console.log({data});

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
          {/* <Grid templateColumns='repeat(2, 1fr)'>
            <Box>
              <ProfileSection song={data}/>
              <Divider my={7} /> */}
              
              {/* <Divider my={7} /> */}
              {/* <LiveProjectSection />
            </Box>
            <Box>
              <TechStackSection />
            </Box>
            
          </Grid>
           */}
          <HStack spacing="8" display={{ md: 'flex' }} alignItems={'flex-start'} justifyContent='space-between'>
            <Box width={'auto'}>
              {/* <ProfileSection song={data}/> */}
              <ProfileSection />
              <Divider my={7} />
              
              {/* <Divider my={7} /> */}
              <LiveProjectSection />
            </Box>
            <Box maxW={'sm'} display={{  }}>
              <TechStackSection />
            </Box>
            
          </HStack>

          {/* <Flex justifyContent="space-between">
            <Box width='70%'>
              <ProfileSection song={data}/>
              <Divider my={7} /> */}
              
              {/* <Divider my={7} /> */}
              {/* <LiveProjectSection />
            </Box>
            <Box width='30%'>
              <TechStackSection />
            </Box>
            
          </Flex> */}
        </Container>

      </main>
    </div>
  )
}


