import React from "react";
import { categoryInfos } from "./CategoryFullInfos.jsx";
import CategoryCard from "./CategoryCard.jsx";
import classes from "./category.module.css";


const Category = () => {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, i) => (
          <CategoryCard data={infos} key={i} />
      ))}
    </section>
  );
};

export default Category;
