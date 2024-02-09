import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EventIcon from '@mui/icons-material/Event';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MenuIcon from '@mui/icons-material/Menu';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { IconButton, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


export default function Drawer() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, setState] = React.useState({
    left: false,
  });
   const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 , margin:0 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home",'Events', 'Sponsers', 'Gallery' , "Contacts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {(index === 0)?<ListItemIcon><StorefrontIcon /></ListItemIcon>:((index===1)? <ListItemIcon><EventIcon></EventIcon></ListItemIcon>:((index===2)?<ListItemIcon><CurrencyRupeeIcon></CurrencyRupeeIcon></ListItemIcon>:((index===3)?<ListItemIcon><CollectionsIcon></CollectionsIcon></ListItemIcon>:<ListItemIcon><ContactPageIcon></ContactPageIcon></ListItemIcon>)))}
             <Link to ={(index===0)?"/":"/" + text.toLowerCase()} style={{ textDecoration: 'none' }}><ListItemText primary={text}></ListItemText></Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Box sx={{display:"flex",justifyContent:"center",marginTop:"15px"}}><Button onClick={ ()=>navigate("/login")}variant="contained" sx={{backgroundColor:"#A259FF" }}>Login</Button></Box>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon />
                    </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}