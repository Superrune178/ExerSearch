import React from 'react';
import { Stack } from '@mui/material';
import { BounceLoader } from "react-spinners";

const Loader = () => (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
        <BounceLoader color="grey" speedMultiplier={3} />
    </Stack>
);

export default Loader;