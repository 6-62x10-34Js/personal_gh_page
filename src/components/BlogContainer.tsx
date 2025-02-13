import React, { useState }  from "react";
import {
    Card,
    CardContent,
    Container,
    Grid,
    ListItem,
    Typography,
    List,
    CardActionArea,
    Dialog,
    IconButton,
    CardMedia
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BlogCard from "./BlogCard";
import blogPosts from "../blog/content/blogPosts";
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";


const BlogContainer: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const handleOpen = (post: any) => {
    setSelectedPost(post);
  };

  const handleClose = () => {
    setSelectedPost(null);
  };

  // @ts-ignore
    return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4, justifyItems: 'center', justifyContent: 'center', alignItems: 'center' }}>


      {/* Fullscreen dialog for selected post */}
            <Dialog
        open={!!selectedPost}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        sx={{
          "& .MuiBackdrop-root": { backdropFilter: "blur(5px)" }, // Ensure the background is blurred
        }}
      >
        {selectedPost && (
          <Card
            variant="outlined"
            sx={{
              width: "70%",
              height: "90%",
              margin: "auto",
              mt: "5%",
              padding: 3,
              boxShadow: 3,
              overflow: "auto",
              position: "relative", // Ensure close button stays inside
            }}
          >
            {/* Close Button inside the Card */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
              }}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              component="img"
              height='flex'
              image= {require(`../static/images/${selectedPost.topicImage}`)}
              alt={selectedPost.topicImage}
            />
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {selectedPost.title}
              </Typography>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                {selectedPost.subtitle}
              </Typography>
                 <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                    <Avatar sx={{ mr: 1 }} src={require(`../static/images/${selectedPost.authorAvatar}`)} alt={selectedPost.author} />
                    <Typography variant="body2" color="textSecondary">
                      By {selectedPost.author} | {new Date(selectedPost.date).toLocaleDateString()}
                    </Typography>
                  </Box>
              <Typography variant="body1">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: selectedPost.content,
                    }}
                  />
              </Typography>

            </CardContent>
          </Card>
        )}
      </Dialog>

        <Grid item xs={12} sm={6} md={3} sx={{
                width: "100%",
                justifyContent: "center",
        justifyItems: "center",
        alignItems: "center"}} >
          <Typography variant="h4" gutterBottom>
            Latest Blog Posts
          </Typography>
          <Box
              sx={{
                display: "grid", width: "100%",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 230px))",
                gap: 5,
                justifyContent: "center", // Center grid on the page
                justifyItems: "center", // Center items within the grid
                padding: 2, // Add padding for spacing
              }}
            >
              {blogPosts.slice(0, 4).map((post) => (
                <Box
                  key={post.id}
                  onClick={() => handleOpen(post)}
                  sx={{
                    width: "100%", // Ensures responsiveness
                    maxWidth: "250px", // Prevents cards from becoming too large
                    aspectRatio: "4 / 3", // Maintains aspect ratio
                      display: "flex",
                      justifyContent: "center",
                      boxSizing: 'border-box',
                      margin: 'auto'
                  }}
                >
                  <BlogCard post={post} />
                    </Box>
                  ))}
            </Box>
        </Grid>

    <Grid item xs={12} sm={6} md={3} >
        <Paper elevation={3} style={{ padding: "1rem" }}>

      <Typography variant="h5" gutterBottom style={{ marginTop: "2rem" }}>
        Blog Post Descriptions
      </Typography>
      <List>
        {blogPosts.map((post) => (
          <ListItem key={post.id} onClick={() => handleOpen(post)}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.description}
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Paper>

    </Grid>
    </Container>
  );
};

export default BlogContainer;