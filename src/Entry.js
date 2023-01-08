import React from 'react'
import MainView from './views/MainView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Entry = () => {
    const { mode } = useSelector(state => state.app);
    const materialUITheme = createTheme({
        palette: {
            mode: mode ? 'light' : 'dark',
            primary: {
                main: mode ? '#e91e63' : '#C4BB40'
            },
            secondary: {
                main: mode ? '#ff9100' : '#408BFB'
            },
            /* text: {
                  primary: "#000",
                  primary1: themeMode ? "#000" : "#fff"
             },*/
        },
        typography: {
            fontFamily: ['"Abel"', 'sans-serif'].join(','),
            fontSize: 14,
        },



        /*components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: themeMode ? '#fff' : '#424242',
                        color: themeMode ? '#000' : '#fff',
    
                    },
                },
            },
            MuiInput: {
                styleOverrides: {
                    root: {
                        color: themeMode ? '#000' : '#fff',
                    },
                },
            },
    
            MuiTableCell: {
                styleOverrides: {
                    stickyHeader: {
                        backgroundColor: themeMode ? '#E2DD9F' : '#D0E2FE',
                        color: themeMode ? "#000000" : "#fff"
                    }
                }
            }
        },*/
    }
    );


    return (
        <ThemeProvider theme={materialUITheme}>
            <MainView />
        </ThemeProvider>
    )
}

export default Entry