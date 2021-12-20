import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from '@material-ui/core/Avatar';
import AppBarCollapse from "./AppBarCollapse";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@mui/material/colors';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  navigation: {
    background: '#182e41'
  },
  toggleDrawer: {},
  appTitle: {
    margin: '0 15px',
  },
  search: {
    marginLeft: 'auto !important',
    width: 'auto',
    marginRight: '15%',
    minWidth: '250px', 
    borderRadius: '20px !important', 
    border: '1px solid #60b3de !important', 
    background: 'transparent !important'
  },
  input: {
    borderRadius: '20px'
  },
  avatar:{
    marginRight: '20px'
  }
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const QuoteListStyle = {
  color: "#fff !important",
  borderRadius: 'unset',
  backgroundColor: '#2c3d4b',
  border: "unset",
  '&:focus': {
    border: 'unset',
  },
  '&:hover': {
    border: 'unset',
    borderColor: 'transparent'
  },
};


function ButtonAppBar(props) {
  const { classes } = props;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <AppBar position="fixed" className={classes.navigation}>
      <Toolbar>
        <Avatar
          alt="Logo"
          src="/img/logo.png"
          sx={{ width: 24, height: 24 }}
        />
        <FormControl sx={{ m: 1, minWidth: 250 }}
          style={QuoteListStyle}
        >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          style={QuoteListStyle}
        >
          <MenuItem value="">
            <em style={styles.normal}>All List</em>
          </MenuItem>
          <MenuItem value={1}>List One</MenuItem>
          <MenuItem value={2}>List Two</MenuItem>
          <MenuItem value={3}>List Three</MenuItem>
        </Select>
      </FormControl>
        <AppBarCollapse />
        <Search className={classes.search}>
          <SearchIconWrapper>
            <SearchIcon style={{ color: grey[500] }} />
          </SearchIconWrapper>
          <StyledInputBase className={classes.input}
            placeholder="Search Links"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);

