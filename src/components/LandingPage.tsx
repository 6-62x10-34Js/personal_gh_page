import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";
import blogPosts from "../blog/content/blogPosts";

const avatar = require('../static/images/georg-herbert-bluthner.webp');

const LandingPageComponent: React.FC = () => {
    const navigate = useNavigate();
    const latestPost = blogPosts[blogPosts.length - 1];

    return (
        <Grid
            container
            spacing={3}
            maxWidth="80vw"

            justifyContent="center"
            alignItems="stretch" // Ensures equal height
        >
            {/* Author Card */}
            <Grid item xs={12} md={6}>
                <Card sx={{
                    height: "100%",
                    maxHeight: 500,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                }}>
                    <CardActionArea sx={{flexGrow: 1}} onClick={() => navigate("/About")}>

                        <CardContent sx={{display: "flex", alignItems: "center", gap: 2}}>
                            <Avatar alt="Author Name" src={avatar} sx={{width: 56, height: 56}}/>
                            <Box>
                                <Typography variant="h6" fontWeight="bold">Georg Herbert Blüthner</Typography>
                                <Typography variant="body2" color="text.secondary">PhD Candidate |
                                    Astrophysics</Typography>
                                <Typography variant="body2" color="text.secondary">Exploring the world through
                                    data.</Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            {/* Clickable Navigation Card */}
            <Grid item xs={12} md={6}>
                <Card sx={{
                    height: "100%",
                    maxHeight: 500, // Max height for the card
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden", // Prevents content overflow
                }}>
                    <CardActionArea sx={{flexGrow: 1}} onClick={() => navigate("/Blog")}>
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: {xs: "column", sm: "row"}, // Stack on small screens, row on larger screens
                                alignItems: "center",
                                gap: 2, // Adds spacing between image & text
                                height: "100%",  // Ensure the content takes full available height
                                overflow: "auto", // Allows scrolling if content overflows
                                padding: 2, // Adjust padding for better content positioning
                                boxSizing: "border-box", // Ensures padding is included in the card height
                            }}
                        >
                            {/* Image Section */}
                            <Box
                                sx={{
                                    width: {xs: "100%", sm: "40%"}, // Full width on small screens, 40% on larger screens
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center", // Center the image vertically
                                    overflow: "hidden", // Prevents image overflow
                                    height: "100%", // Ensure the image section fills the available height
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={require(`../static/images/${latestPost.thumbnail}`)}
                                    alt={latestPost.thumbnail}
                                    sx={{
                                        width: "100%",
                                        height: "100%", // Ensures the image covers the full height of the parent
                                        objectFit: "cover", // Ensures the image scales to cover its container
                                        objectPosition: "center", // Centers the image within its container
                                    }}
                                />
                            </Box>

                            {/* Text Section */}
                            <Box
                                sx={{
                                    flex: 1,
                                    textAlign: {xs: "center", sm: "left"}, // Center text on small screens
                                    padding: 1, // Adjust padding for text spacing
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    fontWeight="bold"
                                    sx={{fontSize: {xs: "1.5rem", sm: "2rem"}}} // Responsive font size
                                >
                                    Blog
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{fontSize: {xs: "0.875rem", sm: "1rem"}}} // Responsive font size
                                >
                                    Explore the latest blog posts.
                                </Typography>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>


        </Grid>
    );
};

export default LandingPageComponent;