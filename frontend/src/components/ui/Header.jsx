import PropTypes from "prop-types";
import { Fragment } from "react";
import { Box, Typography } from "@mui/material";

/**
 * Header for each webpage
 * @param {{title: String}} props - The text to be displayed
 * @returns 
 */

export default function Header({ title }) {
  return (
    <Fragment>
      <Box component="section">
        <Typography variant="h3" component="h1">
          {title}
        </Typography>
      </Box>
    </Fragment>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};