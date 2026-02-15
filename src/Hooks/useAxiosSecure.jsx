import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const AxiosSecure = axios.create({
  baseURL: "e-tuition-bd-server-three.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logout, authToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = AxiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${authToken}`;
      return config;
    });

    // Interceptor for response
    const resInterceptor = AxiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);
        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          logout().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      AxiosSecure.interceptors.request.eject(reqInterceptor);
      AxiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logout, navigate, authToken]);

  return AxiosSecure;
};

export default useAxiosSecure;
