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
import { liveProjects, techStacks } from '../constant';
import { LiveProjectCard } from '../components/LiveProjectCard';

export const LiveProjectSection = ({ project }) => {
    return (
        <SlideFade in offsetY={80} delay={0.2}>
            <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={3}
            >
                Project
            </Heading>
            <Text textColor={useColorModeValue("gray.600", "gray.400")} fontSize={'lg'}>
                Beberapa project yang telah saya buat ataupun membantu dalam proses pengembangannya.
            </Text>

            <SimpleGrid columns={[1, 2, 2, 2]} mt={5}>
                {liveProjects.map((project) => {
                    return (
                        <LiveProjectCard
                            key={project.name}
                            project={project}
                        />
                    );
                })}
            </SimpleGrid>
        </SlideFade>
    )
}
