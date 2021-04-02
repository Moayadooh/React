import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Create() {
  return (
    <div>
      {/* <Typography variant="h1" color="primary" align="center">
        Create a New Note
      </Typography> */}

      {/* noWrap --> display text in one line only */}
      {/* <Typography color="secondary" noWrap>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </Typography> */}

      <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
        Create a New Note
      </Typography>
    </div>
  )
}
