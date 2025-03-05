import { Box, Typography } from '@mui/material';
import YouTubeVideo from '../components/YoutubeVideo';

export default function Videos() {
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
        fontWeight={'bold'}
        sx={{ marginTop: 8, marginBottom: 3 }}
      >
        VIDEOS
      </Typography>
      <Box sx={{}}>
        <YouTubeVideo videoId='OwLb5zuuilA' />
        <YouTubeVideo videoId='nqBctId2-gg' />
        <YouTubeVideo videoId='Z3nQeO1wxls' />
        <YouTubeVideo videoId='0cDstjLuge8' />
      </Box>
    </Box>
  );
}
