import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function PostForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data.title, data.body, data.author);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmitForm)} sx={{ marginBottom: '2rem' }}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        rules={{ required: 'Title is required' }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="body"
        control={control}
        defaultValue=""
        rules={{ required: 'Body is required' }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Body"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Controller
        name="author"
        control={control}
        defaultValue=""
        rules={{ required: 'Author is required' }}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            label="Author"
            variant="outlined"
            fullWidth
            margin="normal"
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default PostForm;
