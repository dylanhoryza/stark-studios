import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import LogoCard from '../components/LogoCard';
import ServicePhoto from '../assets/6.png';
import BMW from '../assets/brand-photos/BMW.svg.png';
import McD1 from '../assets/brand-photos/McDonald.svg.png';
import McD2 from '../assets/brand-photos/McD 2.svg';
import Company4 from '../assets/brand-photos/LOGO.png';

const photosData = [
  {
    imageSrc: `${BMW}`,
  },
  {
    imageSrc: `${McD1}`,
  },
  {
    imageSrc: `${McD2}`,
  },
  {
    imageSrc: `${Company4}`,
  },
];

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
      <Box
        component='img'
        src={ServicePhoto}
        alt='Service'
        sx={{
          width: '100%',
          maxWidth: 800,
          height: 'auto',
          display: 'block',
          mx: 'auto',
          borderRadius: 2,
          boxShadow: 3,
          mt: 4,
          mb: 4,
        }}
      />
      <Typography variant='body1' sx={{ color: 'white', mt: 4 }}>
        Stark Studios is a full-service media agency based in Scottsdale,
        Arizona, dedicated to crafting authentic, high-impact content that
        commands attention and drives engagement. From globally trusted brands
        like McDonald's and BMW to mom-and-pop businesses, we bring an elevated
        level of expertise and creativity to every project.
      </Typography>
      <Typography variant='body1' sx={{ color: 'white', mt: 2 }}>
        Founded in 2019 by Trent Stark, our passion lies in breaking the mold of
        traditional ad agencies by using the success of working with major
        companies to help smaller, locally owned businesses thrive. Whether
        through stunning video production, photography, or personalized
        strategic social media management, we help people and brands tell their
        stories in an unforgettable way.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Link to='/contact' onClick={() => window.scrollTo(0, 0)}>
          <Button
            variant='outlined'
            sx={{
              color: '#008080',
              borderColor: '#008080',
              backgroundColor: '#E7D4AB',
              minWidth: 150,
              fontWeight: 'bold',
            }}
          >
            Contact
          </Button>
        </Link>
      </Box>
      <Typography
        variant='h4'
        gutterBottom
        align='center'
        color='white'
        sx={{ marginTop: 5, marginBottom: 5, fontWeight: 'bold' }}
      >
        BRANDS THAT TRUST US
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {photosData.map((photo, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <LogoCard {...photo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
