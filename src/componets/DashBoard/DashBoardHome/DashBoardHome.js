import { Grid } from '@mui/material';
import * as React from 'react';
import Profile from '../Profile';

const DashBoardHome = () => {
    return (
        <Grid container spacing={2}>
        <Grid item xs={9}>
          <h2>your Order:</h2>
        </Grid>
        <Grid item xs={3}>
            <Profile></Profile>
        </Grid>

    </Grid>
    );
};

export default DashBoardHome;