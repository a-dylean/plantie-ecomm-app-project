import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../components/theme';
import { ProductsContainer } from '../features/products/productsContainerPage';
import { RegistrationForm } from '../features/auth/registrationPage';
import { UserPage } from '../features/users/userPage';
import { ProductPage } from '../features/products/productPage';
import { SuccessfullPayment } from '../features/checkout/successfullPayment';
import { CancelledPayment } from '../features/checkout/cancelledPayment';
import { useEffect } from 'react';
import { routes } from '../helpers/routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useCreateUser, useGetUser } from '../helpers/userActions';

export const App = () => {
  const token = localStorage.getItem('accessToken');
  const createNewUser = useCreateUser();
  const { data, error, isLoading, isSuccess } = useGetUser();

  useEffect(() => {
    if (!token) {
      createNewUser();
    }
  }, [data, token]);
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<ProductsContainer />} />
            <Route path={routes.ALL_PRODUCTS} element={<ProductsContainer />} />
            <Route path={routes.PRODUCT_ITEM} element={<ProductPage />} />
            <Route path={routes.REGISTER} element={<RegistrationForm />} />
            <Route
              path={routes.ME}
              element={
                <UserPage
                  data={data}
                  error={error}
                  isLoading={isLoading}
                  isSuccess={isSuccess}
                />
              }
            />
            <Route path={routes.SUCCESS} element={<SuccessfullPayment />} />
            <Route path={routes.CANCEL} element={<CancelledPayment />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};
function enabled(variables: void): Promise<unknown> {
  throw new Error('Function not implemented.');
}

