import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PhotoCard from '../components/PhotoCard';
import LilJohn from '../assets/7.jpg';

const photosData = [
  {
    title: 'Lil John',
    description: 'A fun photo of Lil John',
    imageSrc: `${LilJohn}`,
    buttonText: 'View Full Size',
    link: '/assets/full_7.jpg',
  },
  // Add more photos here
];

export default function PhotosPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Typography variant='h4' gutterBottom align='center'>
        Client Photos
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {photosData.map((photo, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <PhotoCard {...photo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
