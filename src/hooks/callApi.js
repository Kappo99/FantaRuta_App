const server = "https://api-fantaruta.kappo.it";

async function callApi(uri, method, data) {
  const requestOptions = {
    method: method,
    body: data,
  };

  const token = localStorage.getItem("token");
  if (token != null) {
    requestOptions.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(`${server}/${uri}`, requestOptions);

  if (response.status == 401) {
    localStorage.removeItem("token");
    localStorage.removeItem("idRutatore");
  }

  return response;
}

export default callApi;
