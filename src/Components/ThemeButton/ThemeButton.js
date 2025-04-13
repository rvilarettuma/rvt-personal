import React from 'react';
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../../Contexts/themeContext';

const ThemeButton = () => {
    const { mode, toggleMode } = useTheme();

    return (
        <Box id="theme-button-box"         
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1,
                p: 3,
            }}>
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
            {mode === "dark" ? (<LightModeIcon />) : (<DarkModeIcon />)}
        </IconButton>
        </Box>

    )
}
export default ThemeButton;
    // <Box
        // sx={{
        //     display: "flex",
        //     width: "100%",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     bgcolor: "background.default",
        //     color: "text.primary",
        //     borderRadius: 1,
        //     p: 3,
        // }}
    // >
    //     {theme.palette.mode} mode
        // <IconButton
        //     sx={{ ml: 1 }}
        //     onClick={colorMode.toggleColorMode}
        //     color="inherit"
        // >
        //     {theme.palette.mode === "dark" ? (
        //         <Brightness7Icon />
        //     ) : (
        //         <Brightness4Icon />
        //     )}
        // </IconButton>
    // </Box>