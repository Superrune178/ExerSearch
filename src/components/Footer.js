import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
    <Box mt="80px" bgcolor="#48a168">
        <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
            <img src={Logo} alt="logo" style={{ width: '200px', height: 'auto', marginBottom: '0' }} />
        </Stack>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="40px">by Rounald Andrawes</Typography>
    </Box>
);

export default Footer;