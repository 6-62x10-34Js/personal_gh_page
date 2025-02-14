import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import LandingPageComponent from "../components/LandingPage";

const backgroundPath = require(`../static/images/background_landingpage.jpg`);

export const Home = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${backgroundPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}>
            <Container maxWidth="xl" sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
                <h1 style={{color: "white", fontSize: "3rem", textAlign: "center"}}>Welcome to Pale Blue Dot</h1>
                <p style={{color: "white", fontSize: "1.5rem", textAlign: "center"}}>"Without data you're just another
                    person with an opinion." - W. Edwards Deming</p>

                <LandingPageComponent/>
            </Container>

        </Box>
    );
};
