import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import { ArrowBackIos } from '@mui/icons-material';



export const BackButton = ({ show }) => {
  const navigate = useNavigate();
  return (
    <IconButton edge="start" onClick={() => navigate(-1)} sx={{ pl: 2 }}>
      <ArrowBackIos sx={{
        color: 'primary.main'
        // visibility: show ? 'visibile' : 'hidden'
      }} />
    </IconButton>
  )
}
