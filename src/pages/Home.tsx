import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';
import Mcdonalds1 from '../assets/mcdonalds1.jpg';
import Polar1 from '../assets/polar1.jpg';
import LilJohn from '../assets/7.jpg';
import Contact from '../components/Contact';
import Lion from '../assets/photos/DSC02923-Enhanced-NR.jpg';
// import StarkLogo from '../assets/STARK-STUDIOS-LOGO.png';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', padding: 0 }}>
      <Grid container direction="column" spacing={0}>
        {/* Section 1 */}
        <Grid size={{xs: 12}}>
          <Box
            sx={{
              backgroundImage: `url(${Lion})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 6 }}>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: 150,
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
        <Grid size={{xs: 12}}>
          <Box
            sx={{
              backgroundImage: `url(${Mcdonalds1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 4 }}>
              <Link to="/photos" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: 150,
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
        <Grid size={{xs: 12}}>
          <Box
            sx={{
              backgroundImage: `url(${Polar1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              padding: 4,
            }}
          >
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ textAlign: 'center', pb: 4 }}>
              <Link to="/videos" onClick={() => window.scrollTo(0, 0)}>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#008080',
                    borderColor: '#008080',
                    backgroundColor: '#E7D4AB',
                    minWidth: 150,
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
        <Grid size={{xs: 12}}>
          <Box
            sx={{
              backgroundImage: `url(${LilJohn})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
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
