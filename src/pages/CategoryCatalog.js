import React, { useEffect, useState } from "react"

import CardList from "../components/CardList";
import Filters from "../components/Filters";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'
import { useProductFunctions } from "../context/ProductContext";
const CategoryCatalog = (categorySelected) => {
  const ProductFunctions = useProductFunctions();
  /* ------------------GetProducts useEffect------------------*/
  useEffect(() => {
       ProductFunctions.getProductByCategorySelected(categorySelected)
  },[categorySelected])

  

  return (
    <main className="page">
      <div className="containerPage" >
        <div className="catalog">
          <aside>
            <Filters />
          </aside>
          <main className="products">
            <CardList props={ProductFunctions?.listProduct} />
          </main>

        </div>
      </div>
    </main>
  );
}

export default CategoryCatalog;