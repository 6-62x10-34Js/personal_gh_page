import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

interface BlogPost {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    topic: string;
    topicImage: string;
    thumbnail: string;
    content: string;
    images: string[];
}

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({post}) => {

    const imagePath = require(`../static/images/${post.thumbnail}`);
    return (

        <Card sx={{
            maxWidth: 345,
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxSizing: 'border-box',
            margin: 'auto',
            // Responsive sizing for different screen sizes
            '@media (max-width:600px)': {
                maxWidth: '100%', // Ensure the card takes full width on small screens
                height: 'auto', // Allow height to adjust on small screens
            }
        }}>
            <CardActionArea sx={{flex: 1, display: 'flex', flexDirection: 'column', height: '100%'}}>
                <CardMedia
                    component="img"
                    height="140"
                    // width="100%"
                    image={imagePath}
                    alt={post.title}
                    sx={{objectFit: 'cover', height: '50%', width: '100%'}}
                />
                <CardContent sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <Typography variant="h6" component="div" sx={{flex: 1}}>
                        {post.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{flex: 2}}>
                        {post.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BlogCard;