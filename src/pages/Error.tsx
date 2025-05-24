import { useRouteError, useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  keyframes,
  useTheme,
} from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState } from 'react';

const glowPulse = (color: string) => keyframes`
  0% { box-shadow: 0 0 0 0 rgba(${color}, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(${color}, 0); }
  100% { box-shadow: 0 0 0 0 rgba(${color}, 0); }
`;

export default function ErrorPage() {
  const theme = useTheme();
  const error = useRouteError();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleHomeClick = () => {
    setIsNavigating(true);
    setTimeout(() => navigate('/'), 800);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  // Convert hex to rgb without the # prefix
  const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  };

  const errorColorRgb = hexToRgb(theme.palette.error.main);

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        py: 4,
        backgroundColor: theme.palette.grey[100],
        color: theme.palette.grey[100],
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          color: theme.palette.error.main,
          mb: 2,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}
      >
        Oops!
      </Typography>

      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: theme.palette.grey[400],
          mb: 3,
          maxWidth: 500,
        }}
      >
        Unexpected error
      </Typography>

      <Box
        sx={{
          backgroundColor: theme.palette.grey[800],
          borderRadius: 2,
          p: 3,
          mb: 4,
          maxWidth: 600,
          borderLeft: `4px solid ${theme.palette.error.main}`,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.grey[300],
            fontFamily: 'monospace',
            wordBreak: 'break-word',
          }}
        >
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText ||
            'Generic error message'}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        <Button
          variant="contained"
          startIcon={<HomeTwoToneIcon />}
          onClick={handleHomeClick}
          size="large"
          disabled={isNavigating}
          sx={{
            backgroundColor: theme.palette.grey[700],
            color: theme.palette.grey[100],
            '&:hover': {
              backgroundColor: theme.palette.grey[600],
            },
            animation: `${glowPulse(errorColorRgb)} 2s infinite`,
            px: 4,
          }}
        >
          {isNavigating ? 'Redirection' : 'Home'}
        </Button>

        <Button
          variant="outlined"
          startIcon={<RefreshIcon />}
          onClick={handleRetry}
          size="large"
          sx={{
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            '&:hover': {
              backgroundColor: `${theme.palette.error.main}15`,
              borderColor: theme.palette.error.main,
            },
            px: 4,
          }}
        >
          Retry
        </Button>
      </Box>
    </Container>
  );
}
