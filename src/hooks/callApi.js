const server = "https://api-fantaruta.kappo.it";
const token = localStorage.getItem("token");

async function callApi(uri, method, data) {
  const requestOptions = {
    method: method,
    body: data,
  };

  if (token != null) {
    requestOptions.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(`${server}/${uri}`, requestOptions);

  if (response.status == 401) {
    localStorage.removeItem("token");
  }

  return response;
}

export default callApi;
