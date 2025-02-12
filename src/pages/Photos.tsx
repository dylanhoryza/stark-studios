import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PhotoCard from '../components/PhotoCard';
import LilJohn from '../assets/7.jpg';
import LilJohn2 from '../assets/photos/1.jpg';
import Polar1 from '../assets/photos/DSC02053.jpg';
import Polar2 from '../assets/photos/DSC02158.jpg';
import Trent1 from '../assets/photos/DSC02309.jpg';
import Lion from '../assets/photos/DSC02923-Enhanced-NR.jpg';
import Parrot from '../assets/photos/DSC03244.jpg';
import Swing from '../assets/photos/DSC03592.jpg';
import Family1 from '../assets/photos/DSC03688.jpg';
import Bar1 from '../assets/photos/DSC04164-Enhanced-NR.jpg';
import Bar2 from '../assets/photos/DSC04175-Enhanced-NR.jpg';
import Bar3 from '../assets/photos/DSC04261.jpg';
import Bar4 from '../assets/photos/DSC04505-Enhanced-NR.jpg';
import Mcdonalds1 from '../assets/photos/DSC04450.jpg';
import Mcdonalds2 from '../assets/photos/DSC04498.jpg';
import Mcdonalds3 from '../assets/photos/DSC04701-Enhanced-NR.jpg';
import Mcdonalds4 from '../assets/photos/DSC05311.jpg';
import Wedding1 from '../assets/photos/DSC05981.jpg';
import Wedding2 from '../assets/photos/DSC06050.jpg';
import Wedding3 from '../assets/photos/DSC06087.jpg';
import Wedding4 from '../assets/photos/DSC06361.jpg';
import Worker from '../assets/photos/DSC06846.jpg';
import Baby1 from '../assets/photos/DSC07456.jpg';
import Baby2 from '../assets/photos/DSC07499.jpg';

const photosData = [
  {
    imageSrc: `${LilJohn}`,
  },
  {
    imageSrc: `${LilJohn2}`,
  },
  {
    imageSrc: `${Polar1}`,
  },
  {
    imageSrc: `${Polar2}`,
  },
  {
    imageSrc: `${Trent1}`,
  },
  {
    imageSrc: `${Lion}`,
  },
  {
    imageSrc: `${Parrot}`,
  },
  {
    imageSrc: `${Swing}`,
  },
  {
    imageSrc: `${Family1}`,
  },
  {
    imageSrc: `${Bar1}`,
  },
  {
    imageSrc: `${Bar2}`,
  },
  {
    imageSrc: `${Bar3}`,
  },
  {
    imageSrc: `${Bar4}`,
  },
  {
    imageSrc: `${Mcdonalds1}`,
  },
  {
    imageSrc: `${Mcdonalds2}`,
  },
  {
    imageSrc: `${Mcdonalds3}`,
  },
  {
    imageSrc: `${Mcdonalds4}`,
  },
  {
    imageSrc: `${Wedding1}`,
  },
  {
    imageSrc: `${Wedding2}`,
  },
  {
    imageSrc: `${Wedding3}`,
  },
  {
    imageSrc: `${Wedding4}`,
  },
  {
    imageSrc: `${Worker}`,
  },
  {
    imageSrc: `${Baby1}`,
  },
  {
    imageSrc: `${Baby2}`,
  },
];

export default function PhotosPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: 'grey.800' }}>
      <Typography variant='h4' gutterBottom align='center' color='white' sx={{ marginTop: 8, marginBottom: 6}}>
        Photos
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
