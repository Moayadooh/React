import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core' //import function

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover':{
      backgroundColor:'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function MakeStyles() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
      className={classes.title}
        variant="h6"
        component="h2"
      >
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
      >
        Submit
      </Button>
    </Container>
  )
}
