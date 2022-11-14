import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#885A89",
      card : "#EDE6EE"
    },
    secondary: {
      main: "#2CACC9",
    },
    tertiary:{
        main:"#F95738"
    },
    other:{
        dark: "#505050",
        grey:"#DCDDDE"
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        }
    }
  },
  navbar:{
    main:["Home" , "About Us" , "Admissions" , "Infrastructure" , "Student Section" , "Notice Board" , "Social media" , "Log in" ],
    admin:["Teams", "Class Content" , "Infrastructure" , "Notice Board"]
  }
});

export default theme;