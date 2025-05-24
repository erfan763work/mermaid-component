import {
  Box,
  Typography,
  Grid,
  Alert,
  AlertTitle,
  useTheme,
  useMediaQuery,
  Chip,
  Paper,
} from '@mui/material';
import { MermaidDiagram, useAllDiagrams } from 'src/components';
import MermaidItemLoading from './components/MermaidItemLoading';
import { diagramTypeTitles } from './components/utils';
import MermaidItemError from './components/MermaidItemError';

export default function AllDiagramsView() {
  const { data, isLoading, isError, error } = useAllDiagrams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isLoading) {
    return <MermaidItemLoading />;
  }

  if (isError) {
    return <MermaidItemError error={error} />;
  }

  return (
    <Box sx={{ p: isMobile ? 2 : 3 }}>
      {Object.entries(diagramTypeTitles).map(([key, title]) => {
        const diagrams = data?.[key as keyof typeof data];
        if (!diagrams || diagrams.length === 0) return null;

        return (
          <Box key={key} sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {title}
              <Chip
                label={`${diagrams.length} diagrams`}
                size="small"
                color="primary"
                sx={{ ml: 1 }}
              />
            </Typography>

            <Grid container spacing={3}>
              {diagrams.map((diagram) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={diagram.id}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box sx={{ flexGrow: 1 }}>
                      <MermaidDiagram chart={diagram?.code} />
                    </Box>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mt: 1,
                        textAlign: 'center',
                        color: theme.palette.text.secondary,
                        fontWeight: 500,
                      }}
                    >
                      {diagram?.title || 'Untitled Diagram'}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      })}

      {data && Object.values(data).every((arr) => arr.length === 0) && (
        <Alert severity="info" sx={{ mt: 3 }}>
          <AlertTitle>No Diagrams Found</AlertTitle>
          Create your first diagram to get started!
        </Alert>
      )}
    </Box>
  );
}
