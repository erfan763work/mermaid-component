import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HomeIcon from '@mui/icons-material/Home';

const NotFoundPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        width="100%"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
          <Grid size={{ xs: 12, md: 6 }} textAlign="center">
            <ErrorOutlineIcon
              sx={{
                fontSize: 120,
                color: theme.palette.error.main,
                mb: 2,
              }}
            />
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                fontWeight: 700,
                color: theme.palette.text.primary,
              }}
            >
              404
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 500,
                mb: 3,
              }}
            >
              Oops! Page not found
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
              The page you're looking for doesn't exist or has been moved.
              Please check the URL or navigate back to our homepage.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<HomeIcon />}
                  component={RouterLink}
                  to="/"
                >
                  Go to Homepage
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                >
                  Contact Support
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
