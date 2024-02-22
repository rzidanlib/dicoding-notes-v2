const BASE_URL = "https://notes-api.dicoding.dev/v1";

export const getAccessToken = () => {
  return localStorage.getItem("ACCESS_TOKEN");
};

export const putAccessToken = (accessToken) => {
  return localStorage.setItem("ACCESS_TOKEN", accessToken);
};

export const fetchWithToken = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

export const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

export const register = async ({ name, email, password }) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

export const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

export const getNotes = async () => {
  const response = await fetchWithToken(`${BASE_URL}/notes`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
};

export const getNote = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

export const getNotesArchived = async () => {
  const response = await fetchWithToken(`${BASE_URL}/notes/archived`);
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true, data: [] };
  }

  return { error: false, data: responseJson.data };
};

export const archivedNotes = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: "POST",
  });
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

export const unArchivedNotes = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: "POST",
  });
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

export const deleteNotes = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: "DELETE",
  });
  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

export const addNote = async ({ title, body }) => {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== "success") {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};
