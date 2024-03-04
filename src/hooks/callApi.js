const server = "https://api-fantaruta.kappo.it";
// const token = localStorage.getItem("token");

async function callApi(uri, method, data) {
  const response = await fetch(`${server}/${uri}`, {
    method: method,
    // headers: {
    //   Authorization: `Bearer ${token}`,
    // },
    body: data,
  });

  // if (response.status == 401) {
  //   localStorage.removeItem("token");
  // }

  return response;
}

export default callApi;
