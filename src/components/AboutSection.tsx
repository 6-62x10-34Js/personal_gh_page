import React from 'react';
import {Box, Typography, Card, CardContent, Grid, List, ListItem, ListItemText} from '@mui/material';
import {styled} from '@mui/system';

// Image import
const avatar = require('../static/images/cropped_personal_image.jpg');

// Styled components for layout
const AvatarImage = styled('img')({
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
});

const SectionTitle = styled(Typography)({
    fontWeight: 600,
    marginBottom: '10px',
});

const AboutComponent: React.FC = () => {
    return (
        <Card sx={{maxWidth: '1200px', margin: 'auto', padding: '20px'}}>
            <CardContent>
                <Grid container spacing={2} alignItems="flex-start">
                    {/* Left side: Avatar */}
                    <Grid item xs={12} sm={4}>
                        <Box sx={{position: 'sticky', top: 0, textAlign: 'center'}}>
                            <AvatarImage src={avatar} alt="Avatar"/>
                            <Typography variant="h6" sx={{marginTop: '10px'}}>Georg Herbert Blüthner</Typography>

                            {/* Additional list below avatar */}
                            <List>
                                <ListItem>
                                    <ListItemText primary="PhD Candidate | Astrophysics"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Space Research Institute, Austrian Academy of Sciences (starting March 2025)"/>
                                </ListItem>
                                  <ListItem>
                                    <ListItemText primary="Research group: Space Plasma Physics"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Solar-terrestial Sciences, Solar Wind, Geo-effectiveness, In Situ Data, Multi-Satellite Observations, Data Processing, Statistics"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Based in Graz, Austria"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="georg.bluethner@outlook.com"/>
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    {/* Divider */}
                    <Grid item xs={12} sm={8}>
                        <Box sx={{display: 'flex', flexDirection: 'column', paddingLeft: '20px'}}>
                            {/* Research Interests */}
                            <Box sx={{marginBottom: '20px'}}>
                                <SectionTitle variant="h6">Research Interests</SectionTitle>
                                <Typography variant="body1">
                                    My current research
                                    focuses on the statistical analysis of multi-spacecraft Solar Wind (SW)
                                    observations.
                                    I compared OMNI data recorded at L1 with near-Earth SW data collected by the
                                    spacecraft
                                    of the THEMIS and ARTEMIS missions. A large-scale correlation study with over 1500
                                    events
                                    in five distinct SW classes was performed.
                                </Typography>
                            </Box>

                            {/* Education */}
                            <Box sx={{marginBottom: '20px'}}>
                                <SectionTitle variant="h6">Education</SectionTitle>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="MSc Space Sciences and Earth from Space"
                                            secondary="Technical University and Karl-Franzens University | Graz, Austria (10/2022 - expected by 03/2025)"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="BSc in Environmental Systems Sciences/Natural Sciences and Technology"
                                            secondary="Karl-Franzens University and Technical University | Graz, Austria (10/2017 - 06/2022)"
                                        />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Conferences */}
                            <Box sx={{marginBottom: '20px'}}>
                                <SectionTitle variant="h6">Conferences</SectionTitle>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="EGU General Assembly (04/2024)"
                                            secondary="Poster Presentation: 'Comparing L1 to near-Earth data for magnetosheath jet studies' | Vienna, Austria"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="European Space Weather Week (11/2024)"
                                            secondary="Poster Presentation: 'Comparing upstream OMNI and near-Earth Solar Wind data' | Coimbra, Portugal"
                                        />
                                    </ListItem>
                                </List>
                            </Box>

                            {/* Skills */}
                            <Box sx={{marginBottom: '20px'}}>
                                <SectionTitle variant="h6">Skills</SectionTitle>
                                <Typography variant="body1">
                                    <strong>Languages:</strong> German (native), English (Professional proficiency),
                                    Danish (Basic)
                                    <br/>
                                    <strong>Programming:</strong> Python, IDL, Typescript, PHP, HTML/CSS, LaTeX
                                    <br/>
                                    <strong>Software:</strong> MATLAB, R, C/C++, SQL, Docker, Google Cloud
                                </Typography>
                            </Box>

                            {/* Outreach */}
                            <Box sx={{marginBottom: '20px'}}>
                                <SectionTitle variant="h6">Outreach</SectionTitle>
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Die Lange Nacht der Forschung (05/2024)"
                                            secondary="Public outreach for the University of Graz at the Lustbühel Observatory | Graz, Austria"
                                        />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AboutComponent;
