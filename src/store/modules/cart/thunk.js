import { setCart } from "./actions";

export const addCartThunk = (product) => {
  return (dispatch, getStore) => {
    const list = getStore().cart;

    const selectedProduct = list?.find(({ id }) => id === product.id);

    let newList;

    if (selectedProduct) {
      newList = [...list];

      const index = newList.indexOf(selectedProduct);

      newList[index].count += 1;
    } else {
      const newProduct = { ...product, count: 1 };

      newList = [...list, newProduct];
    }
    localStorage.setItem("cart", JSON.stringify(newList));
    dispatch(setCart(newList));
  };
};

export const removeCartThunk = (id) => {
  return (dispatch, getStore) => {
    const list = getStore().cart;

    const selectedProduct = list?.find((product) => product.id === id);

    let newList;
    
    if (selectedProduct.count > 1) {
      newList = [...list];

      const index = newList.indexOf(selectedProduct);

      newList[index].count -= 1;
      // eslint-disable-next-line no-restricted-globals
    } else if (confirm("Deseja excluir este produto?")) {
      newList = list.filter((product) => product.id !== id);
    }
    if (newList) {
      localStorage.setItem("cart", JSON.stringify(list));
      dispatch(setCart(newList));
    }
  };
};
