import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

export default function Buttons() {
    return (
        <Container>

            {/* disableElevation --> remove shadow */}
            <Button onClick={() => alert("you clicked me")} type="submit" color="secondary" variant="contained" disableElevation>Submit</Button>

            <Button type="submit">Submit</Button>
            <Button type="submit" color="secondary" variant="outlined">Submit</Button>

        </Container>
    )
}
