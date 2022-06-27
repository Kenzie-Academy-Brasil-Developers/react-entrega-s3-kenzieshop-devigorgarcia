import { setProducts } from "./action";

export const searchProductThunk = (searchProduct) => {
  return (dispatch, getStore) => {
    const productsList = getStore().products;
    const searchProducts = productsList.filter(
      (product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()) 
    );
    console.log(searchProducts)
    dispatch(setProducts(searchProducts))
  };
};
