import { Box, Typography } from '@mui/material';
import Contact from '../components/Contact';
export default function ContactPage() {
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
        Contact
      </Typography>
      <Contact />
    </Box>
  );
}
