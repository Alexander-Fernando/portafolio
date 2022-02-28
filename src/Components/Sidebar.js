import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Link } from '@mui/material';

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <ul>
        <li>
          <Link
            sx={{
              backgroundColor: 'primary.main',
            }}
            href="mailto:alexander.glzprd@hotmail.com"
          >
            <EmailIcon></EmailIcon>
          </Link>
        </li>
        <li>
          <Link
            sx={{
              backgroundColor: 'primary.main',
            }}
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon></LinkedInIcon>
          </Link>
        </li>
        <li>
          <Link
            sx={{
              backgroundColor: 'primary.main',
            }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </Link>
        </li>
      </ul>
    </Box>
  );
};

export default Sidebar;
