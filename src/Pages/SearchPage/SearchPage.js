 import React, { useEffect } from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import "../../App.scss";
 import Loader from "../../components/Loader/Loader";
 import ProductList from "../../components/ProductList/ProductList";
 import {
   fetchAsyncSearchProduct,
   getSearchProducts,
   getSearchProductsStatus,
   
 } from "../../store/SearchSlice";
 const Search = () => {
   const dispatch = useDispatch();
   const { searchTerm } = useParams();
   const searchProducts = useSelector(getSearchProducts);
   const searchProductsStatus = useSelector(getSearchProductsStatus);

   useEffect(() => {
  
        dispatch(fetchAsyncSearchProduct(searchTerm));
      }, [searchTerm]);

   if (searchProducts.length === 0) {
     
     return<div className="container fs-xl text-orange text-bold"> <p>No Products Found!</p></div>
   }
   return (
     <>
       {searchProductsStatus === STATUS.LOADING ? (
         <Loader />
       ) : (
        <div className="container"> 
         <ProductList products={searchProducts} />
         </div>
       )}
     </>
   );
 };

 export default Search;





