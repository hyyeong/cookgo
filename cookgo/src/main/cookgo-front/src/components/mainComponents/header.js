import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import pageUrl from '../../styles/Url';

const sections = [
  { title: '재료 관리', url: '#' },
  { title: '레시피 찾기', url: '#' },
  { title: '커뮤니티', url: '#' },
  { title: '식재료 등록', url: '#' },
  { title: 'Politics', url: '#' },
  { title: '의견', url: '#' },
];

function MainHeader(props) {
  const title="Cookgo";
  const sections = [
    { title: '재료 관리', url: '#' },
    { title: '레시피 찾기', url: '#' },
    { title: '커뮤니티', url: '#' },
    { title: '식재료 등록', url: '#' },
    { title: 'Politics', url: '#' },
    { title: '의견', url: '#' },
  ];
  return (
      <AppBar elevation={0} sx={{
        position:"sticky",
      }}>
        <Toolbar sx={{ borderBottom: 2, borderColor: 'primary' }}>
          <Button size="small" color="secondary">
            Dark
          </Button>
          <Typography
            component="h2"
            variant="h5"
            color="secondary"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small" color="secondary" href={pageUrl+"login"}>
            Sign in
          </Button>
          <Button variant="outlined" size="small" color="secondary" href={pageUrl+"signup"}>
            Sign up
          </Button>
        </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="secondary"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
      </AppBar>
  );
}

MainHeader.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default MainHeader;
