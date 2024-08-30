import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

function PostList({ posts }) {
  return (
    <Box>
      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              By {post.author} | {new Date(Number(post.timestamp) / 1000000).toLocaleString()}
            </Typography>
            <Typography variant="body2" component="div" dangerouslySetInnerHTML={{ __html: post.body }} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default PostList;
