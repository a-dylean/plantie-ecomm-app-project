import {
  AppBar,
  Typography,
  IconButton,
  Drawer,
  Box,
  Badge,
} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Cart } from '../features/cart/cart';
import { useState } from 'react';
import { getTotalItems } from '../helpers/helperFunctions';
import { useNavigate } from 'react-router-dom';
import Face4Icon from '@mui/icons-material/Face4';
import LogoutIcon from '@mui/icons-material/Logout';
import { routes } from '../helpers/routes';
import { User } from '../app/interfaces';
import { queryClient } from '..';
import { ProductOrder } from '../models/api';

export const Topbar = () => {
  const navigate = useNavigate();
  const [cartOpen, setCartOpen] = useState(false);
  const user: User | undefined = queryClient.getQueryData(['user']);
  const productOrders: ProductOrder[] | undefined = queryClient.getQueryData(['cart']);
  const fullProfile = user?.fullProfile;
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    queryClient.setQueryData(['user'], null);
    queryClient.setQueryData(['cart'], null);
    navigate(routes.ALL_PRODUCTS);
  };
  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Box sx={{ cursor: 'pointer', margin: '0 auto' }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{ flexGrow: 1, textAlign: 'center' }}
            onClick={() => navigate(routes.ALL_PRODUCTS)}
          >
            Plantie
          </Typography>
        </Box>
        <IconButton onClick={() => setCartOpen(true)}>
          <LocalMallIcon />
          <Badge badgeContent={getTotalItems(productOrders)} color="secondary" />
        </IconButton>
        <IconButton onClick={() => navigate(routes.ME)}>
          <Face4Icon />
        </IconButton>
        {fullProfile && (
          <IconButton>
            <LogoutIcon onClick={handleLogout} />
          </IconButton>
        )}
      </AppBar>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Box sx={{ mt: '3rem' }}>
          <Cart />
        </Box>
      </Drawer>
    </>
  );
};
