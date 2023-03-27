import React, { useEffect, useState } from "react";
import { getAxiosInstance } from "../services/functions";
import swal from "sweetalert";
import { Outlet, useNavigate } from "react-router-dom";

function AdminPrivateRoute({ children, redirectPath = "/login" }) {
  const instance = getAxiosInstance();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      return navigate(redirectPath);
    }

    setLoading(true);
    instance.get(`/api/checkingAuthenticated`).finally(() => {
      setLoading(false);
    });
  }, []);

  instance.interceptors.response.use(
    undefined,
    function axiosRetryInterceptor(err) {
      if (err.response.status === 401) {
        swal("Usuario no Autorizado", err.response.data.message, "warning");
        navigate("/");
      }
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        navigate("/");
      } else if (error.response.status === 404) {
        swal("Error 404", "Url / Página no encontrada", "warning");
        navigate("/404");
      }
      return Promise.reject(error);
    }
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children ? children : <Outlet />;
}

export default AdminPrivateRoute;
