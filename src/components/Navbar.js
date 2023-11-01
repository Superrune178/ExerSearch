import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px', lg: '0' }, justifyContent: 'none' }} px="20px">
        <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
            <Link to="/" style={{ textDecoration: 'none', color: '#63B683' }}>Home</Link>
        </Stack>
        <Link to="/">
            <img src={Logo} alt="logo" style={{ width: '100px', height: 'auto', margin: '0px', display: 'flex', position: 'relative', top: '30px' }} />
        </Link>
    </Stack>
);

export default Navbar;