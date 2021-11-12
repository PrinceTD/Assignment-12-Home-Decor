import { Avatar, Card, CardActions, CardContent, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Profile = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    const card = (
        <React.Fragment>
            <CardContent>
                <Avatar style={{ alignItems: 'center' }} sx={{ bgcolor: deepOrange[500] }}>{user.displayName}</Avatar>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                    {user.displayName}
                </Typography>
                <Typography sx={{ mt: 1 }} color="text.secondary">
                    {user.email}
                </Typography>
                <Link className="border-0 text-danger"><Button variant="outlined" onClick={logOut} >SignOut
                </Button></Link>
            </CardContent>

        </React.Fragment>
    );
    return (

        <Box>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
};

export default Profile;