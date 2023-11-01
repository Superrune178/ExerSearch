import React from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'
import FlexingMan from '../assets/images/Flexing man.png';
import TopLeft from '../assets/images/Top-left.png';
import BottomRight from '../assets/images/Bottom-right.png';

const HeroBanner = () => (
    <Box position="relative" sx={{
        mb: { lg: "400px", xs: "50px" }
    }}>
        <Box sx={{ display: { lg: 'flex', xs: 'none' } }}>
            <img src={TopLeft} className='top-left' />
        </Box>
        <Grid container spacing={{ lg: 30, xs: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid md={4} xs={12}>
                <Box
                    sx={{
                        height: { lg: '330px', xs: 'auto' },
                        width: { lg: '420px', xs: '80%' },
                        borderRadius: '35px',
                        boxShadow: { lg: '15px 15px 15px 6px #333', xs: 'none' },
                        position: { lg: 'absolute', xs: 'inherit' },
                        top: '150px',
                        left: '160px',
                        backgroundColor: 'white',
                        display: { lg: 'inherit', xs: 'block' }
                    }}
                >
                    <img src={FlexingMan} className='flexing-img' />
                </Box>
            </Grid>
            <Grid md={8} xs={12}>
                <Box
                    sx={{
                        position: { lg: 'absolute', xs: 'inherit' },
                        top: '180px'
                    }}
                >
                    <Typography
                        fontWeight="600"
                        sx={{ fontSize: { lg: "62px", xs: '40px' } }}
                    >
                        ExerSearch
                    </Typography>
                    <Typography Typography fontWeight={500} sx={{ fontSize: { lg: '24px', xs: '40px' } }} mb="23px" mt="10px" color={"#48a168"}>
                        Discover Your Workout, Tailored To You
                    </Typography>
                    <Typography>
                        Introducing ExerSearch, the ultimate fitness search engine tailored for your needs. <br />
                        Whether you're pinpointing a specific muscle group, have a piece of equipment in <br />
                        mind, or are just browsing exercises, our platform instantly curates a list of exercises <br />
                        perfect for you. Simplify your fitness journey, achieve your goals, and optimize every workout
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Box sx={{ display: { lg: 'flex', xs: 'none' } }}>
            <img src={BottomRight} className='bottom-right' />
        </Box>
    </Box>
);

export default HeroBanner;