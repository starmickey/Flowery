import { Fragment } from 'react';
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * Rectangle shaped that displays product image and description.
 * @param {Object} props 
 * @returns 
 */

function ProductCard({ src, name, price, description }) {
  return (
    <Fragment>

      <Card sx={{ maxWidth: 345 }}>
        {/* Image */}
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={src}
        />

        {/* Description */}
        <CardContent>
          <label htmlFor="product-card-title">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </label>
          <label htmlFor="product-card-price">
            <Typography variant="h6" color="text.secondary">
              $ {price}
            </Typography>
          </label>
          <label htmlFor="product-card-description">
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </label>
        </CardContent>

        {/* Links */}
        <CardActions>
          <Button size="small">Add to cart</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

    </Fragment>
  );
}

ProductCard.defaultProps = {
  src: "./no-image-avaiable.webp",
  description: "",
};

ProductCard.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default ProductCard;