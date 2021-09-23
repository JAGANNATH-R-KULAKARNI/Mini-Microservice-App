import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Title" variant="standard" name="title" onChange={props.textChangeHandler}/>
    </Box>
  );
}
