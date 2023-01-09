import React from 'react'
import { Box } from '@mui/material'

function SumaryBoxes({ title }) {
    return (
        <Box sx={{ border: '1px solid grey' }}>
            {title}
        </Box>
    )
}

export default SumaryBoxes