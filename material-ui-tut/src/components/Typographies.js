import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

export default function Typographies() {
    return (
        <Container>

            {/* Typography --> instead of h1,h2... or p
            Typography: https://material-ui.com/components/typography/#typography
            Typography API: https://material-ui.com/api/typography/ */}

            <Typography variant="h6" component="h2" gutterBottom color="textSecondary">
                Create a New Note
            </Typography>

            {/* noWrap --> display text in one line only */}
            <Typography color="secondary" noWrap>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>

        </Container>
    )
}
