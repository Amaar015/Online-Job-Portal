import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ListIcon from "@mui/icons-material/List";

const Navbar = ({ menu }) => {
  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorSubMenu, setAnchorSubMenu] = useState(null);

  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorNav(null);
    setAnchorSubMenu(null);
  };

  const openSubMenu = (event, subMenu) => {
    setAnchorSubMenu({ anchor: event.currentTarget, subMenu });
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#222",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <LocalLibraryIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={"div"}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          Job Seeker
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {menu.map((page) => (
            <div key={page.name}>
              {page.subMenu ? (
                <>
                  <Button
                    color="inherit"
                    onClick={(event) => openSubMenu(event, page.subMenu)}
                  >
                    {page.name}
                  </Button>
                  <Menu
                    anchorEl={anchorSubMenu?.anchor}
                    open={Boolean(anchorSubMenu?.subMenu === page.subMenu)}
                    onClose={closeMenu}
                  >
                    {page.subMenu.map((subPage) => (
                      <MenuItem
                        key={subPage.name}
                        onClick={closeMenu}
                        component="a"
                        href={subPage.link} // You can replace href with the Link component for routing
                      >
                        {subPage.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                <Button
                  key={page.name}
                  color="inherit"
                  component="a"
                  href={page.link} // You can replace href with the Link component for routing
                >
                  {page.name}
                </Button>
              )}
            </div>
          ))}
        </Box>
        <div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              position: "absolute",
              top: 0,
              width: "100%",
              backgroundColor: "transparent",
              zIndex: 1100,
            }}
          >
            <Typography
              variant="h6"
              component={"div"}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              Job Seeker
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{
                marginRight: "1.5rem",
                display: { xs: "flex", md: "none" },
              }}
              onClick={openMenu}
            >
              <ListIcon />
            </IconButton>
          </Box>

          <Menu
            anchorEl={anchorNav}
            open={Boolean(anchorNav)}
            onClose={closeMenu}
            PaperProps={{
              style: {
                top: "50px",
                right: 0,
                transform: "translateX(0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <MenuList>
              {menu.map((page) => (
                <MenuItem key={page.name} onClick={closeMenu}>
                  {page.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
