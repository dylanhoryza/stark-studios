import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PhotoCard from '../components/PhotoCard';
import LilJohn from '../assets/compressed-images/7.jpg';
import LilJohn2 from '../assets/compressed-images/1.jpg';
import Polar1 from '../assets/compressed-images/DSC02053.jpg';
import Polar2 from '../assets/compressed-images/DSC02158.jpg';
import Trent1 from '../assets/compressed-images/DSC02309.jpg';
import Lion from '../assets/compressed-images/DSC02923-Enhanced-NR.jpg';
import Parrot from '../assets/compressed-images/DSC03244.jpg';
import Swing from '../assets/compressed-images/DSC03592.jpg';
import Family1 from '../assets/compressed-images/DSC03688.jpg';
import Bar1 from '../assets/compressed-images/DSC04164-Enhanced-NR.jpg';
import Bar2 from '../assets/compressed-images/DSC04175-Enhanced-NR.jpg';
import Bar3 from '../assets/compressed-images/DSC04261.jpg';
import Bar4 from '../assets/compressed-images/DSC04505-Enhanced-NR.jpg';
import Mcdonalds1 from '../assets/compressed-images/DSC04450.jpg';
import Mcdonalds2 from '../assets/compressed-images/DSC04498.jpg';
import Mcdonalds3 from '../assets/compressed-images/DSC04701-Enhanced-NR.jpg';
import Mcdonalds4 from '../assets/compressed-images/DSC05311.jpg';
import Wedding1 from '../assets/compressed-images/DSC05981.jpg';
import Wedding2 from '../assets/compressed-images/DSC06050.jpg';
import Wedding3 from '../assets/compressed-images/DSC06087.jpg';
import Wedding4 from '../assets/compressed-images/DSC06361.jpg';
import Cake from '../assets/compressed-images/unnamed.jpg';
import Cake2 from '../assets/compressed-images/unnamed (1).jpg';
import wedding1 from '../assets/compressed-pics/1 (1).jpg';
import wedding2 from '../assets/compressed-pics/1 (2).jpg';
import wedding3 from '../assets/compressed-pics/1 (3).jpg';
import wedding4 from '../assets/compressed-pics/1 (4).jpg';
import wedding5 from '../assets/compressed-pics/1 (5).jpg';
import wedding6 from '../assets/compressed-pics/1 (6).jpg';
import wedding7 from '../assets/compressed-pics/1 (7).jpg';
import wedding8 from '../assets/compressed-pics/1 (8).jpg';
import wedding9 from '../assets/compressed-pics/1 (9).jpg';
import wedding10 from '../assets/compressed-pics/1 (10).jpg';
import wedding11 from '../assets/compressed-pics/1 (11).jpg';
import wedding12 from '../assets/compressed-pics/1 (12).jpg';
import wedding13 from '../assets/compressed-pics/1 (13).jpg';
import wedding14 from '../assets/compressed-pics/1 (14).jpg';
import wedding15 from '../assets/compressed-pics/1 (15).jpg';
import wedding16 from '../assets/compressed-pics/1 (16).jpg';
import wedding17 from '../assets/compressed-pics/1 (17).jpg';
import wedding18 from '../assets/compressed-pics/1 (18).jpg';
import wedding19 from '../assets/compressed-pics/1 (19).jpg';
import wedding20 from '../assets/compressed-pics/1 (20).jpg';
import wedding21 from '../assets/compressed-pics/VIVI (1).jpg';
import wedding22 from '../assets/compressed-pics/VIVI (13).jpg';
import wedding23 from '../assets/compressed-pics/WEDDING (6).jpg';
import wedding24 from '../assets/compressed-pics/WEDDING (8).jpg';
import wedding25 from '../assets/compressed-pics/WEDDING (10).jpg';
import wedding26 from '../assets/compressed-pics/WEDDING (16).jpg';
import wedding27 from '../assets/compressed-pics/WEDDING (19).jpg';
import wedding28 from '../assets/compressed-pics/WEDDING (32).jpg';

const photosData = [
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
    imageSrc: `${Cake}`,
  },
  {
    imageSrc: `${Cake2}`,
  },
  {
    imageSrc: `${Lion}`,
  },
  {
    imageSrc: `${Parrot}`,
  },
  { imageSrc: wedding1 },
  { imageSrc: wedding2 },
  { imageSrc: wedding3 },
  { imageSrc: wedding4 },
  { imageSrc: wedding5 },
  { imageSrc: wedding6 },
  { imageSrc: wedding7 },
  { imageSrc: wedding8 },
  { imageSrc: wedding9 },
  { imageSrc: wedding10 },
  { imageSrc: wedding11 },
  { imageSrc: wedding12 },
  { imageSrc: wedding13 },
  { imageSrc: wedding14 },
  { imageSrc: wedding15 },
  { imageSrc: wedding16 },
  { imageSrc: wedding17 },
  { imageSrc: wedding18 },
  { imageSrc: wedding19 },
  { imageSrc: wedding20 },
  { imageSrc: wedding21 },
  { imageSrc: wedding22 },
  { imageSrc: wedding23 },
  { imageSrc: wedding24 },
  { imageSrc: wedding25 },
  { imageSrc: wedding26 },
  { imageSrc: wedding27 },
  { imageSrc: wedding28 },
];

export default function PhotosPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#008080' }}>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 3, fontWeight: 'bold' }}
      >
        PHOTOS
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
