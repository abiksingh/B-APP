import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  CardActionArea,
  Grid,
  Typography,
  Drawer,
  Button,
  Menu,
  MenuItem,
  Fade,
  TextField,
  Stack,
  Pagination,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Toolbar,
  Container,
  CardMedia,
  Card,
  LinearProgress,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  getAllAlbums,
  paginationAlbums,
  searchIndividualAlbums,
} from '../redux/actions/albumsActions';

import {
  cardStyle,
  nameStyle,
  dateStyle,
  drawerHeader,
  DrawerWrapper,
  filterStyle,
  menuStyle,
  buttonStyle,
  albumStyle,
  sortStyle,
  boxStyle,
  PaginationWrapper,
} from '../Helpers/styles';

const drawerWidth = '20rem';
const AlbumsScreen = ({ window }: any) => {
  const dispatch = useDispatch();

  type RootState = {
    getAlbums: {
      data: any;
      loading: boolean;
    };
  };

  const getAlbums = useSelector((state: RootState) => state.getAlbums);
  const { data, loading } = getAlbums;

  useEffect(() => {
    dispatch(getAllAlbums());
  }, [dispatch]);

  type Albums = {
    id: string;
    cover: string;
    name: string;
    releaseDate: string;
    totalTracks: number;
    artists: [
      {
        albums: number;
        id: string;
        name: string;
      }
    ];
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [, setAlbumState] = useState(data);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);

  const sortByName = () => {
    setAlbumState(
      data?.sort((a: { name: string }, b: { name: string }) => {
        const keyA = a.name;
        const keyB = b.name;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
    );
    setAnchorEl(null);
  };
  const sortByTrack = () => {
    setAlbumState(
      data?.sort((a: { totalTracks: number }, b: { totalTracks: number }) => {
        const keyA = a.totalTracks;
        const keyB = b.totalTracks;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
    );
    setAnchorEl(null);
  };
  const sortByDate = () => {
    setAlbumState(
      data?.sort((a: { releaseDate: string }, b: { releaseDate: string }) => {
        const keyA = a.releaseDate;
        const keyB = b.releaseDate;
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
    );
    setAnchorEl(null);
  };

  const handlePagination = (e: any) => {
    const input = e.target as HTMLElement;
    dispatch(paginationAlbums(input.textContent!));
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Container>
        <Typography textAlign="center" sx={drawerHeader} variant="h4">
          Album Shelf
        </Typography>
        <DrawerWrapper>
          <TextField
            sx={filterStyle}
            fullWidth
            label="Filter"
            id="fullWidth"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(searchIndividualAlbums(e.target.value))
            }
            type="search"
          />
        </DrawerWrapper>
        <Button
          variant="contained"
          size="small"
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          color="info"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={buttonStyle}
        >
          <Typography sx={sortStyle} variant="subtitle2">
            Sort By
          </Typography>
        </Button>

        <Menu
          sx={menuStyle}
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={sortByName}>Album Name</MenuItem>
          <MenuItem onClick={sortByDate}>Release Date</MenuItem>
          <MenuItem onClick={sortByTrack}>Total Tracks</MenuItem>
        </Menu>
      </Container>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={boxStyle}>
        <Toolbar />
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {loading ? (
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>
          ) : (
            data?.map((album: Albums) => (
              <Grid
                container
                direction="column"
                alignItems="center"
                display="flex"
                key={album.id}
                item
                lg={4}
                md={6}
                sm={12}
                xs={12}
                sx={albumStyle}
              >
                <Card sx={cardStyle}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={album.cover}
                      alt="cover image"
                    />
                  </CardActionArea>
                </Card>
                <Typography sx={nameStyle} variant="body1">
                  {album.name}
                </Typography>
                <Typography sx={dateStyle} variant="subtitle2">
                  {album.releaseDate}
                </Typography>
              </Grid>
            ))
          )}
        </Grid>
        <PaginationWrapper>
          <Stack spacing={2}>
            <Pagination
              count={11}
              onChange={handlePagination}
              shape="rounded"
            />
          </Stack>
        </PaginationWrapper>
      </Box>
    </Box>
  );
};

export default AlbumsScreen;
