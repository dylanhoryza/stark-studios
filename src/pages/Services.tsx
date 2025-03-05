import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PhotoCard from '../components/PhotoCard';
import ServicePhoto from '../assets/6.png';
import BMW from '../assets/brand-photos/BMW.svg.png';
import McD1 from '../assets/brand-photos/McDonald.svg.png'
import McD2 from '../assets/brand-photos/McD 2.svg';
import Company4 from '../assets/brand-photos/LOGO.png'

const photosData = [
  {
    imageSrc: `${BMW}`
  },
  {
    imageSrc: `${McD1}`
  },
  {
    imageSrc: `${McD2}`
  },
  {
    imageSrc: `${Company4}`
  },
]

export default function Services() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 4,
        backgroundColor: '#008080',
        height: 'auto',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 3, fontWeight: 'bold' }}
      >
        SERVICES
      </Typography>
      <PhotoCard imageSrc={ServicePhoto} />
      <Typography variant='body1' sx={{ color: 'white', mt: 4 }}>
        Stark Studios is a full-service media agency based in Scottsdale,
        Arizona, dedicated to crafting authentic, high-impact content that
        commands attention and drives engagement. From globally trusted brands
        like McDonald's and BMW to mom-and-pop businesses, we bring an elevated
        level of expertise and creativity to every project. 
      </Typography>
      <Typography variant='body1' sx={{ color: 'white', mt: 2 }}>
     Founded in 2019 by
        Trent Stark, our passion lies in breaking the mold of traditional ad
        agencies by using the success of working with major companies to help
        smaller, locally owned businesses thrive. Whether through stunning video
        production, photography, or personalized strategic social media
        management, we help people and brands tell their stories in an
        unforgettable way.
      </Typography>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 8, marginBottom: 3, fontWeight: 'bold' }}
      >
        BRANDS THAT TRUST US
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
