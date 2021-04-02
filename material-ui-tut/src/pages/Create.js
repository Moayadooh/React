import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

export default function Create() {
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
        Create a New Note
      </Typography>

      {/* noWrap --> display text in one line only */}
      {/* <Typography color="secondary" noWrap>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Typography> */}

      {/* disableElevation --> remove shadow */}
      <Button onClick={() => alert("you clicked me")} type="submit" color="secondary" variant="contained" disableElevation>Submit</Button>

      {/* <Button type="submit">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button> */}
    </Container>
  )
}
