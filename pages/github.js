import React from 'react';
import { Container, Divider } from '@chakra-ui/react'
import Head from 'next/head';
import getGithubRepos from '../constant/getGithubRepos'
import styles from '../styles/Home.module.css'
import GithubSection from '../section/GithubSection';

const Github = ({repos}) => {

    console.log({repos})

    return (
        <div className={styles.container}>
        <Head>
            <title>Hendra</title>
            <meta name="description" content="Hendra" />
            <link rel="icon" href="/handjock.png" />
        </Head>

        <main>
            <Container maxW="container.lg" mt={['20', '20']} mb={['5', '10']}>
                <GithubSection repos={repos}/>
            </Container>
        </main>
    </div>
    )
}

export async function getStaticProps() {
    const repos = await getGithubRepos({ username: process.env.GITHUB_USERNAME });

    return {
        props: {
            repos: repos || null,
        },
    };
}

export default Github;

