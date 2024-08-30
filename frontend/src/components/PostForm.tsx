import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

function PostForm({ onSubmit }) {
  const { control, handleSubmit, reset } = useForm();
  const { quill, quillRef } = useQuill();

  const onSubmitForm = (data) => {
    const body = quill.root.innerHTML;
    onSubmit(data.title, body, data.author);
    reset();
    quill.setContents([]);
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
      <Box sx={{ marginBottom: '1rem' }}>
        <div ref={quillRef} />
      </Box>
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
