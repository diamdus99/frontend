import requests from './httpService';

const SupportServices = {
  addSupport: async (body) => {
    console.log('body', body);
    const supportBody = {
      subject: body.subject,
      name: body.name,
      notes: body.notes,
    };
    return requests.post('/support/addsupport', supportBody);
  },

  getAllSupports: async () => {
    return requests.get('/support');
  },
};

export default SupportServices;
