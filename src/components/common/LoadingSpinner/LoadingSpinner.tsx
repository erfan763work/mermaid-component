import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import type { TLoadingSpinnerProps } from './type';

const LoadingSpinner: React.FC<TLoadingSpinnerProps> = ({
  size = 40,
  thickness = 4,
  message = 'Loading...',
  fullScreen = true,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        ...(fullScreen && {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'background.paper',
          zIndex: 9999,
        }),
      }}
    >
      <CircularProgress
        size={size}
        thickness={thickness}
        sx={{
          color: 'primary.main',
        }}
      />
      {message && (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 1,
          }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default LoadingSpinner;
