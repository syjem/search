import React from "react";
import Profile from "../assets/avatar.jpg";

import { SvgIcon } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import { Stack, Button } from "@mui/material";
import { useLocation, Link, useNavigate } from "react-router-dom";

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(80, 80, 80)",
    color: "rgba(255, 255, 255, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}));

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Stack className="back-home-btn">
          <Tooltip
            title="Back to previous page"
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 300 }}
          >
            <Button variant="text" onClick={handleGoBack}>
              <ArrowBackIcon
                className="arrow-left"
                aria-label="Back previous page arrow"
              />
            </Button>
          </Tooltip>
        </Stack>
        <ul className="nav-menu">
          <li className="nav-item advanced">
            {location.pathname === "/" ? (
              <Link to="/advanced_search">Advanced</Link>
            ) : (
              <Link to="/">Google Search</Link>
            )}
          </li>
          <li className="nav-item images">
            {location.pathname === "/images" ? (
              <Link to="/advanced_search">Advanced</Link>
            ) : (
              <Link to="/images">Images</Link>
            )}
          </li>
          <li className="nav-item">
            <Tooltip
              title="Google apps"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
            >
              <SvgIcon fontSize="large" className="google-apps">
                <svg focusable="false" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                </svg>
              </SvgIcon>
            </Tooltip>
          </li>
          <li>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <p style={{ fontWeight: 900 }}>{"Google Account"}</p>
                  <span>{"Jemuel Repoylo"}</span> <br />
                  <span>{"syjem143@gmail.com"}</span>
                </React.Fragment>
              }
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 300 }}
            >
              <Avatar
                alt="Jemuel Repoylo"
                src={Profile}
                style={{
                  width: 34,
                  height: 34,
                  outline: "4px solid transparent",
                  cursor: "pointer",
                  transition: "outline-color 0.3s",
                }}
                className="avatar"
                onMouseOver={(e) =>
                  (e.currentTarget.style.outlineColor = "#2c2d2e")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.outlineColor = "transparent")
                }
              />
            </HtmlTooltip>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
