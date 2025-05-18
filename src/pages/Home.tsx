import { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Mcdonalds1 from '../assets/compressed-images/DSC04701-Enhanced-NR.jpg';
import Polar1 from '../assets/compressed-images/DSC02053.jpg';
import LilJohn from '../assets/compressed-images/7.jpg';
import Contact from '../components/Contact';
import Lion from '../assets/compressed-images/DSC02923-Enhanced-NR.jpg';

export default function Home() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, width: '100%', padding: 0 }}>
      <Grid container direction='column' spacing={0}>
        {/* Section 1 */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              loading: 'lazy',
              backgroundImage: `url(${Lion})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: 'calc(var(--vh, 1vh) * 100)',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 6 }}>
              <Link to='/services' onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant='outlined'
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: { xs: 150, md: 200 },
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    padding: { xs: '8px 16px', md: '8px 16px' },
                    fontWeight: 'bold',
                  }}
                >
                  Services
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 2 */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              loading: 'lazy',
              backgroundImage: `url(${Mcdonalds1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: 'calc(var(--vh, 1vh) * 100)',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 4 }}>
              <Link to='/photos' onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant='outlined'
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: { xs: 150, md: 200 },
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    padding: { xs: '8px 16px', md: '8px 16px' },
                    fontWeight: 'bold',
                  }}
                >
                  Photos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 3 */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              loading: 'lazy',
              backgroundImage: `url(${Polar1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: 'calc(var(--vh, 1vh) * 100)',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 4 }}>
              <Link to='/videos' onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant='outlined'
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: { xs: 150, md: 200 },
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    padding: { xs: '8px 16px', md: '8px 16px' },
                    fontWeight: 'bold',
                  }}
                >
                  Videos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 4 (Contact) */}
        <Grid size={{ xs: 12 }}>
          <Box
            sx={{
              loading: 'lazy',
              backgroundImage: `url(${LilJohn})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: 'calc(var(--vh, 1vh) * 100)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Contact />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
