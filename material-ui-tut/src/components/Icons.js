import React from 'react'
import Container from '@material-ui/core/Container'
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

export default function Icons() {
    return (
        <Container>

            <AcUnitOutlinedIcon />
            <AcUnitOutlinedIcon color="secondary" fontSize="large" />
            <AcUnitOutlinedIcon color="secondary" fontSize="small" />
            <AcUnitOutlinedIcon color="action" fontSize="small" />
            <AcUnitOutlinedIcon color="error" fontSize="small" />
            <AcUnitOutlinedIcon color="disabled" fontSize="small" />

            <br />

            <Button
                type="submit" color="secondary"
                variant="contained"
                startIcon={<SendIcon />}
                endIcon={<KeyboardArrowRightIcon />}
            >
                Submit
            </Button>

        </Container>
    )
}
