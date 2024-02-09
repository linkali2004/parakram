import React from 'react'
import { Box,Grid,Typography} from '@mui/material';
import styled from '@emotion/styled';
export default function Sponsers() {
    const StyledImg = styled('img')({
        width: "130px",
        height:"100px",
    })

  return (
<>
<Box sx={{display:"flex" , padding:"40px 0px" ,alignItems:"center",flexDirection:"column"}}>
            <Typography variant="body1" sx={{color:"#858584"}}>Have a look</Typography>
            <Box sx={{display:"flex" , gap:1 ,justifyContent:"center"}}>
            <Typography  sx={{color:"black" , typography: { sm: 'h6', xs: 'h6', lg:"h4" }}}>Special thanks to</Typography>
            <Typography  sx={{color:"#13ADB7",typography: { sm: 'h6', xs: 'h6', lg:"h4" }}}>Our Sponsers</Typography>
        </Box>
        <Box sx={{padding:"5px" , marginTop:"18px"}}>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="https://resources.redbull.com/logos/redbullcom/v3/redbullcom-logo.svg" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/cairn.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/tata.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/SBI.jpg" alt="logo"/>
                </Grid>

                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/vodafone.png" alt="logo"/>
                </Grid>

                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/dominos.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/lensfit.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/pepsi.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/Indian_oil.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/pantaloons.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/ntpc.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/Reliance.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/canara_bank.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/ojas.png" alt="logo"/>
                </Grid>

                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/shell.png" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/gail.png" alt="logo"/>
                </Grid>


                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/volvo.jpg" alt="logo"/>
                </Grid>
                <Grid item xs={6} sm={4} lg={3} sx={{display:"flex",justifyContent:"center"}}>
                <StyledImg src="../logos/american_swan.png" alt="logo"/>
                </Grid>
            </Grid>
        </Box>
        </Box>
</>
  )
}
