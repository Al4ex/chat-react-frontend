const baseURL = import.meta.env.VITE_BASEURL;

const fetchsinToken = async (endpoint, data, method = "GET") => {
  const url = `${baseURL}/${endpoint}`;
  if (method == "GET") {
    const response = await fetch(url);
    return await response.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

const fetchConToken = async (endpoint, data, method = "GET") => {
  const token = localStorage.getItem("token") || "";
  const url = `${baseURL}/${endpoint}`;
  if (method == "GET") {
    const response = await fetch(url, {
      headers: {
        "x-token": token,
      },
    });
    return await response.json();
  } else {
    const resp = await fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-token": token,
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  }
};

export { fetchsinToken, fetchConToken };
