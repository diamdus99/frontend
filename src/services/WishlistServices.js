import requests from './httpService';

const WishlistServices = {
  getAllProducts: async ({ page, limit, category, title, price }) => {
    const searchCategory = category !== null ? category : '';
    const searchTitle = title !== null ? title : '';
    const searchPrice = price !== null ? price : '';

    return requests.get(
      `/products?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}`
    );
  },

  getUserWishList: async () => {
    // console.log(body, 'getalldiamond');
    return requests.get(`/wishlistroutes`);
  },

  addUserWishlistProduct: async (body) => {
    return requests.post('/wishlistroutes/addwishlist', body);
  },
  getSupplierDiamonds: async (body) => {
    // console.log(body, 'getalldiamond');
    return requests.get(`/diamondsproducts/getSupplierDiamonds`, body);
  },

  addDiamondProduct: async (body) => {
    return requests.post('/diamondsproducts/adddiamondproduct', body);
  },

  getProductById: async (id) => {
    return requests.post(`/products/${id}`);
  },
  addProduct: async (body) => {
    return requests.post('/products/add', body);
  },
  addAllProducts: async (body) => {
    return requests.post('/products/all', body);
  },
  updateProduct: async (id, body) => {
    return requests.patch(`/products/${id}`, body);
  },
  updateManyProducts: async (body) => {
    return requests.patch('products/update/many', body);
  },
  updateStatus: async (id, body) => {
    return requests.put(`/products/status/${id}`, body);
  },

  deleteProduct: async (id) => {
    return requests.delete(`/products/${id}`);
  },
  deleteManyProducts: async (body) => {
    return requests.patch('/products/delete/many', body);
  },
};

export default WishlistServices;
