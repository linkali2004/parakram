import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Tab, Tabs, useMediaQuery } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Drawer from './Drawer';
import { Link, useNavigate } from 'react-router-dom';
import HouseboatIcon from '@mui/icons-material/Houseboat';




export default function Navbar() {
  const [value, setValue] = React.useState();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );


  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("Authorization");
    setLoggedIn(false);
    navigate("/login");
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={0}>
          <Toolbar sx={{ backgroundColor: "#2B2B2B" }}>
             <Box sx={{flexGrow:1}}> <IconButton onClick={() => {navigate("/");setValue()}} ><img src="../logo.png" width="55px" height="55px"></img></IconButton></Box> 
            {(isSmallDevice || isMediumDevice) ? (
              <Drawer></Drawer>
            ) : (
              <>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Tabs value={value} id="tabs" sx={{"& .MuiTabs-indicator":{ backgroundColor:"#13ADB7"}}}>
                    <Link to="/events"><Tab label="Events" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(0)} /></Link>
                    <Link to="/sponsers"><Tab label="Sponsers" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(1)} /></Link>
                    <Link to="/gallery"><Tab label="Gallery" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(2)} /></Link>
                    <Link to="/contacts"><Tab label="Contacts" sx={{ textTransform: "capitalize", color: 'white' }} onClick={() => setValue(3)} /></Link>
                  </Tabs>
                  <Link to="/login"> <Button variant="contained" sx={{ backgroundColor: "#13ADB7", borderRadius: "12px", padding: "5px 20px", height: "80%" }} startIcon={<PersonIcon></PersonIcon>}>Log here</Button></Link>
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}