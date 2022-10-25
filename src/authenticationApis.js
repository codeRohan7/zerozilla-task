import * as api from "./utils/api";



export async function gertAllCateogies() {
  let response = await api.get(`https://fakestoreapi.com/products/categories`);
  return response;


}

export async function getCateogiesItem(cate) {
  let response = await api.get(`https://fakestoreapi.com/products/category/${cate}`);
  return response;


}
export async function getProductDetail(id) {
  let response = await api.get(`https://fakestoreapi.com/products/${id}`);
  return response;


}

