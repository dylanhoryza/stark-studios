import { Box, Typography, Button } from '@mui/material';

type PhotoCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  link: string;
};

const PhotoCard = ({
  title,
  description,
  imageSrc,
  buttonText,
  link,
}: PhotoCardProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'grey.800',
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      <img
        src={imageSrc}
        alt={title}
        style={{ width: '100%', height: 'auto' }}
      />
      <Box sx={{ p: 2 }}>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default PhotoCard;
