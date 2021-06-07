import React from 'react'; 
import { NavLink} from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// implicitly returns JSX
const Header = () => (
   <React.Fragment>
      <CssBaseline />
      <header className="header">
         <Container>
            <Typography className="header__title" variant="h1" id="tableTitle" component="div">
               2021 Skills Competition
            </Typography>
         </Container>
      </header>
   </React.Fragment>
)

export default Header; 