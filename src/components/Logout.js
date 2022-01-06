import React from 'react'
import {Box,Typography,Button} from '@mui/material';
import { Link } from 'react-router-dom';

const Logout = () => {
    return (
        <Box py = {20} textAlign = "center">
            <Typography variant="h2">This is Logout Page</Typography>
            <Typography variant="body2">To continue using the app Please click the login button below</Typography>
            <Button variant="contained" sx= {{marginTop : 5}} component={Link} to="/" >Login Again</Button>
        </Box>
        
    )
}

export default Logout;
