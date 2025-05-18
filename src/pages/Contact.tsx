import { Box, IconButton, Stack } from '@mui/material';
import Contact from '../components/Contact';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TikTokIcon from '@mui/icons-material/MusicNote';
export default function ContactPage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 2,
        backgroundColor: '#008080',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ mt: 8 }}>
        <Contact />
      </Box>

      <Stack direction='row' spacing={3} justifyContent='center' sx={{ mb: 2 }}>
        <IconButton
          component='a'
          href='https://www.instagram.com/stvrkstudios'
          target='_blank'
          rel='noopener'
          sx={{ color: '#E7D4AB' }}
        >
          <InstagramIcon fontSize='large' />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.facebook.com/trent.stark.77'
          target='_blank'
          rel='noopener'
          sx={{ color: '#E7D4AB' }}
        >
          <FacebookIcon fontSize='large' />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.tiktok.com/@trentstarkmusic'
          target='_blank'
          rel='noopener'
          sx={{ color: '#E7D4AB' }}
        >
          <TikTokIcon fontSize='large' />
        </IconButton>
      </Stack>
    </Box>
  );
}
