import { ProgressBar } from 'react-loader-spinner';
import Box from '@mui/material/Box';

export const Loader = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="gray"
        barColor="gray"
      />
    </Box>
  );
};
