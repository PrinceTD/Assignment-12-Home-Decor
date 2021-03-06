import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,

    useParams,
    useRouteMatch
} from "react-router-dom";
import DashBoardHome from './DashBoardHome/DashBoardHome';
import MAkeAdmin from './MakeAdmin/MAkeAdmin';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Page/Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageAllOrder from './manageAllOrder/ManageAllOrder';
import AddProfuct from './addProfuct/AddProfuct';
import MyOrder from './MyOrder/MyOrder';
import AddReview from './AddReview/AddReview';



const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <div className="text-center">
                <Link to="/service"> <Button>Product</Button> </Link> <br />
               
                <Link to={`${url}/pay`}> <Button>Pay</Button> </Link> <br />
                <Link to={`${url}/myOrder`}> <Button>My Order</Button> </Link>
                <br />
                <Link to={`${url}/addReview`}> <Button>Add Review</Button> </Link>
                <br />
                {
                      
                        admin && <Box>
                             <Link to={`${url}/makeAdmin`}> <Button>Add Admin</Button> </Link> <br />
                             <Link to={`${url}/addProfuct`}> <Button>Add Profuct</Button> </Link> <br />
                             <Link to={`${url}/manageAllOrder`}> <Button>Manage All Order</Button> </Link> <br />
                             <Link to={`${url}/manageProducts`}> <Button>Manage Products</Button> </Link>
                        </Box>
                     
                }

            </div>

            <List>
                {[].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"

                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton

                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            <Link style={{ textDecoration: 'none', color: "black" }} to="/home">Home</Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >

                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <DashBoardHome></DashBoardHome>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MAkeAdmin></MAkeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addProfuct`}>
                            <AddProfuct></AddProfuct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllOrder`}>
                            <ManageAllOrder></ManageAllOrder>
                        </AdminRoute>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrder`}>
                           <MyOrder/>
                        </Route>
                        <Route path={`${path}/addReview`}>
                           <AddReview/>
                        </Route>
                    </Switch>

                </Box>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
