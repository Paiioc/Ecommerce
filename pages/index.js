/* eslint-disable @next/next/no-img-element */
import { Typography, CardMedia, Button } from '@material-ui/core';
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Carousel from "react-elastic-carousel";
import Item from "../components/carosel";
import NextLink from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import ProductItem from '../components/ProductItem';
import useStyles from '../utils/styles';
import Contact from "../components/Contactform";



export default function Home(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { topRatedProducts, featuredProducts, newProduct } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout>
      <div className={classes.hero}>
        <div className={classes.herocontent}>
        <h3 className={classes.h3}> Welcome To 
        </h3>
        <h1 className={classes.h1}>
          PAIIOC
        </h1>
        <h3 className={classes.h3}>
          Product And Accessories For Ideal Imagination Of Choice
        </h3>
        </div>
        <CardMedia style={{minHeight: 300, minWidth: 200, display: 'flex', alignItems: 'center'}}>
        <Image
            className={classes.img3}
          
             height='600'
             width='550'
              src='/images/heroimgae.svg'
              alt='shopping'
            />

        </CardMedia>
</div>

<Typography className={classes.h2} variant="h2">Featured Products</Typography>
      
<Carousel className={classes.mt1} 
     breakPoints={breakPoints}
     >
      {featuredProducts.map((product) => (
     <Item>
  <ProductItem 
   className={classes.trp}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          
            </Item>
            ))}
        </Carousel>

        <Typography className={classes.h2} variant="h2">Popular Products</Typography>

        <Carousel className={classes.mt1} 
     breakPoints={breakPoints}
     >
      {topRatedProducts.map((product) => (
     <Item>
  <ProductItem 
   className={classes.trp}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          
            </Item>
            ))}
        </Carousel>

      <Typography className={classes.h2} variant="h2">Latest Products</Typography>
      
      
      <Carousel className={classes.mt1} 
     breakPoints={breakPoints}
     >
      {newProduct.map((product) => (
     <Item>
  <ProductItem 
   className={classes.trp}
              product={product}
              addToCartHandler={addToCartHandler}
            />
          
            </Item>
            ))}
        </Carousel>

<div className={classes.bt}>
      <NextLink href="/search?category=all" passHref>
      <Button
        variant="contained"
        color="primary"
        className={classes.btn2}
        endIcon={<ArrowForwardIcon/>}
      >More</Button>
      </NextLink>
      </div>
      <Contact/>
    </Layout>
  );
} 

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
  .sort({ createdAt: -1, })
    .lean()
    .limit(6);
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
    const newProductDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({ createdAt: -1, })
    .limit(9);
await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
      newProduct: newProductDocs.map(db.convertDocToObj),
    },
  };
}
