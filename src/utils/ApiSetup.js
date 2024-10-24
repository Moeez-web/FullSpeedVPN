import axios from "axios";
import { MakeCancelable } from "./CancelablePromise";

/**
 * Handles API access to DE.
 * Builds http requests via axios.
 * Adds Authorization headers and http errors interceptors.
 * Converts http requests to cancelable promises to allow cancellation of promises for unmounted components.
 */

const END_POINT = "https://api.full-speed.net/api/v1/";
const xsrfToken = Math.random().toString(36).substring(2, 15);
const token = localStorage.getItem("token");

const config = {
  "XSRF-TOKEN": xsrfToken,
  version: "httpOnly",
  Authorization: `Bearer ${token}`,
};

var instance = axios.create({
  baseURL: END_POINT,
  headers: { Authorization: `Bearer ${token}` },
  withCredentials: true,
  transformRequest: [
    (data) => {
      return data;
    },
    ...axios.defaults.transformRequest,
  ],
});

registerInterceptor(instance);

// Add a response interceptor for error handling
function registerInterceptor(instance) {
  instance.interceptors.response.use(
    function (response) {
      // Success
      return Promise.resolve(response.data);
    },
    function (error) {
      // Do something with response error
      // @TODO --reauth
      if (error.response) {
        // The request was made and the server responded with a status code
        return Promise.reject({
          data: error.response.data,
          status: error.response.status,
          statusText: error.response.statusText,
        });
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return Promise.reject({
          data: "",
          status: 0,
          statusText: "No Response",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        return Promise.reject({
          data: "",
          status: 0,
          statusText: error.message,
        });
      }
    }
  );
}

function login(data) {
  const token = data.token;
  // const options = {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // };
  return instance
    .post("/auth/login", { ...data, ...config }, options)
    .then((response) => {
      return Promise.resolve(response);
    });
}

function logout() {
  return instance
    .delete("/logout", { params: { ...config } })
    .then((response) => {
      return Promise.resolve(response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function get(url, data) {
  return MakeCancelable(instance.get(url, { ...data, ...config }));
}

function post(url, data) {
  return MakeCancelable(
    instance.post(url, {
      ...data,
      ...config,
    })
  );
}
function downloadPost(url, data) {
  return MakeCancelable(
    instance.post(
      url,
      { ...data, ...config },
      {
        responseType: "blob",
        contentType: "application/octet-stream",
      }
    )
  );
}
function put(url, data) {
  return MakeCancelable(
    instance.put(url, {
      ...data,
      ...config,
    })
  );
}

function destroy(url, data = {}) {
  return MakeCancelable(
    instance.delete(url, {
      params: { ...data, ...config },
    })
  );
}

function destroyWithBody(url, data) {
  return MakeCancelable(
    instance.delete(url, {
      data: {
        ...config,
        ...data,
      },
    })
  );
}

function upload(url, data) {
  Object.keys(config).forEach((key) => {
    data.append(key, config[key]);
  });
  return MakeCancelable(instance.post(url, data));
}

const download = (url, data) => {
  return MakeCancelable(
    instance.get(url, {
      responseType: "blob",
      contentType: "application/octet-stream",
      ...data,
      ...config,
    })
  );
};

function isLoggedIn() {
  return false;
}
export {
  login,
  logout,
  post,
  get,
  put,
  destroy,
  destroyWithBody,
  download,
  upload,
  isLoggedIn,
  downloadPost,
  instance,
};
