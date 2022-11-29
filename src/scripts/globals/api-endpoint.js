import CONFIG from './config';

const API_ENDPOINT = {
  RESTO: `${CONFIG.BASE_URL}list`,
  ADDREVIEW: `${CONFIG.BASE_URL}review`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
