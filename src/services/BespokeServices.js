import requests from './httpService';

const BespokeServices = {
  getAllBespoke: async () => {
    return requests.get('/bespoke');
  },

  addBespoke: async (body) => {
    console.log(body, 'body body');
    return requests.post('/bespoke/addbespoke', body);
  },
  // getAllProducts: async ({ page, limit, category, title, price }) => {
  //   const searchCategory = category !== null ? category : "";
  //   const searchTitle = title !== null ? title : "";
  //   const searchPrice = price !== null ? price : "";

  //   return requests.get(
  //     `/products?page=${page}&limit=${limit}&category=${searchCategory}&title=${searchTitle}&price=${searchPrice}`
  //   );
  // },
};

export default BespokeServices;
