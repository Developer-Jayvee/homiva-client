// src/lib/api/interceptors.ts

import { api, web } from "./axios";


// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);


// Request interceptor
web.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
web.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);