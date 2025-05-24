import { Box, Grid, Skeleton } from '@mui/material';
import { diagramTypeTitles } from './utils';

export default function MermaidItemLoading() {
  return (
    <Box
      sx={{ p: 3 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {Object.keys(diagramTypeTitles).map((key) => (
        <Box key={key} sx={{ mb: 6 }}>
          <Skeleton variant="text" width="30%" height={60} />
          <Grid container spacing={3} sx={{ mt: 1 }} width="100%">
            {[...Array(3)].map((_, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Skeleton variant="rectangular" height={500} width="260px" />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
}
