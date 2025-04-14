import React from 'react';
import { Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

function FancyHeader(props) {
    const theme = useTheme();
    return (
        <Typography component="h3" variant="h4" sx={{ borderRadius: "4px", backgroundColor: `${theme.palette.accent.main}`, boxShadow: `4px 4px ${theme.palette.text.primary}`, padding: "0.5rem" }}>
            {props.text};
        </Typography>
    )
}

export default FancyHeader