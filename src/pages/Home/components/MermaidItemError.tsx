import { Alert, AlertTitle, Box } from '@mui/material';

export default function MermaidItemError({ error }: { error: Error }) {
  return (
    <Box sx={{ p: 3 }}>
      <Alert severity="error" sx={{ mb: 3 }}>
        <AlertTitle>Error Loading Diagrams</AlertTitle>
        {error?.message || 'An unknown error occurred while loading diagrams.'}
      </Alert>
    </Box>
  );
}
