import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import StarkPic from '../assets/DSC02309.jpg';
import Mcdonalds1 from '../assets/mcdonalds1.jpg';
import Polar1 from '../assets/polar1.jpg';
import LilJohn from '../assets/7.jpg';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '100%', padding: 0 }}>
      <Grid
        container
        direction='column'
        spacing={4}
        size={12}
        sx={{
          '.MuiContainer-root': {
            padding: '0 !important',
          },
        }}
      >
        {/* Section 1 */}
        <Grid size={12} sx={{ height: '900px', width: '100%' }}>
          <Box
            sx={{
              backgroundImage: `url(${StarkPic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              padding: 4,
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                // top: 100,
                left: 0,
                right: 0,
                bottom: 50,
                padding: 2,
                textAlign: 'center',
              }}
            >
              <Link to='/services'>
                <Button
                  variant='outlined'
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                  }}
                >
                  Services
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 2 */}
        <Grid size={12} sx={{ height: '900px' }}>
          <Box
            sx={{
              backgroundImage: `url(${Mcdonalds1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              padding: 4,
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                // top: 100,
                left: 0,
                right: 0,
                bottom: 50,
                padding: 2,
                textAlign: 'center',
              }}
            >
              <Link to='/photos'>
                <Button
                  variant='outlined'
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                  }}
                >
                  Photos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 3 */}
        <Grid size={12} sx={{ height: '900px' }}>
          <Box
            sx={{
              backgroundImage: `url(${Polar1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              padding: 4,
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                // top: 100,
                left: 0,
                right: 0,
                bottom: 50,
                padding: 2,
                textAlign: 'center',
              }}
            >
              <Link to='/videos'>
                <Button
                  variant='outlined'
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                  }}
                >
                  Videos
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Section 4 */}
        <Grid size={12} sx={{ height: '900px' }}>
          <Box
            sx={{
              backgroundImage: `url(${LilJohn})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              padding: 4,
              position: 'relative',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 50,
                left: 0,
                right: 0,
                bottom: 0,
                padding: 2,
                textAlign: 'center',
              }}
            >
              <Contact />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
