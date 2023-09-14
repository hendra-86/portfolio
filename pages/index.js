import { Container, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import { LiveProjectSection } from '../section/LiveProjectSection';
import ProfileSection from '../section/ProfileSection';
import SpotifySection from '../section/SpotifySection';
import TechStackSection from '../section/TechStackSection';
import styles from '../styles/Home.module.css'
import useSWR from 'swr';

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
        <Container maxW="container.lg" mt={['5', '10']} mb={['5', '10']}>
          <ProfileSection song={data}/>
          <Divider my={7} />
          <TechStackSection />
          <Divider my={7} />
          <LiveProjectSection />
        </Container>

      </main>
    </div>
  )
}


