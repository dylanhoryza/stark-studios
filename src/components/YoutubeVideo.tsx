import { Box } from '@mui/material';

type YouTubeVideoProps = {
  videoId: string;
};

const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?&modestbranding=1`;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 800, // Limit width on desktop
        aspectRatio: '1 / 1', // Makes it a square
        margin: '0 auto 20px', // Center + bottom margin
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
      }}
    >
      <iframe
        src={embedUrl}
        title="YouTube video player"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: '0',
        }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  );
};

export default YouTubeVideo;
