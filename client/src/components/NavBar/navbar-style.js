import { styled, AppBar } from '@mui/material';



export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: '15px',
  margin: '30px 0px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px'
}));

