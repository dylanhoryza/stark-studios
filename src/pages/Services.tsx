import { Box, Typography } from '@mui/material';

export default function Services() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: 'grey.800',
        height: '100dvh',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 6 }}
      >
        Services
      </Typography>
    </Box>
  );
}
