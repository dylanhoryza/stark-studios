import { Box } from '@mui/material';
import useTheme from '@mui/material';
import useMediaQuery from '@mui/material';
import StarkPic from '../assets/6.png';

export default function Home() {
  // const theme = useTheme();
  // const matchesSmallScreen = useMediaQuery(theme.breakpoints.down('xl'));

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box sx={{ width: '100%' }}>
        <img src={StarkPic} style={{ width: '50%' }} />
      </Box>
    </Box>
  );
}
