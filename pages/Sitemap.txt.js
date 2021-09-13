// pages/sitemap.js

import db from "../utils/db";
import Product from "../models/Product";

const createSitemapForProducts = (Product) => `${Product
  .map((product) => {
    return `https://paiioc.com/product/${product.slug}`;
  })
  .join("\n")}
    `;


const createSitemapForCategories = (categories) => `${categories
  .map((category) => {
     return `https://paiioc.com/search?category=${category}`;
    })
    .join("\n")}
      `;


    export async function getServerSideProps({ res }) {
      await db.connect();
        const products = await Product.find({}, '-reviews')
        .lean()
        .sort({ createdAt: 1, })
        const categories = await Product.find()
        .distinct('category')
        .lean()
        res.setHeader("Content-Type", "text");
        res.write(createSitemapForProducts(products));
        res.write(createSitemapForCategories(categories));
        res.end();
    }
export default () => null;