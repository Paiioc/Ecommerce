import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'
import React from 'react';
import NextLink from 'next/link';
import Rating from '@material-ui/lab/Rating';
import useStyles from '../utils/styles';
import Image from 'next/image'

export default function ProductItem({ product, addToCartHandler }) {
  const classes = useStyles();
  return (
    <Card className={classes.pCard}>
      <NextLink href={`/product/${product.slug}`} passHref>
        <CardActionArea>
          <CardMedia className={classes.pimg}>
          <Image
          className={classes.img}

           height='400'
           width='350'
            src={product.image}
            alt={product.name}
          />
          </CardMedia>
          <CardContent className={classes.details}>
            <Typography>{product.name}</Typography>
            <Rating value={product.rating} readOnly></Rating>
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions className={classes.pc}>
        <Typography>${product.price}</Typography>
        <Button
         className={classes.btn}
          size="small"
          color="primary"
          variant="contained"
          aria-label="add to shopping cart"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart <AddShoppingCart />
        </Button>
      </CardActions>
    </Card>
  );
}
