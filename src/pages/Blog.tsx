import React from "react";
import Container from '@mui/material/Container';
import BlogContainer from "../components/BlogContainer";



export const Blog = () =>
    <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
        <BlogContainer />
    </Container>

