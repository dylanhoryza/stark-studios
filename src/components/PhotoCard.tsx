import { Box } from '@mui/material';

type PhotoCardProps = {
  imageSrc: string;
};

const PhotoCard = ({ imageSrc }: PhotoCardProps) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 400,
        height: 250,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'transform 0.3s ease-in-out',
        mx: 'auto',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <Box
        component='img'
        src={imageSrc}
        loading='lazy'
        alt='Photo'
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default PhotoCard;
