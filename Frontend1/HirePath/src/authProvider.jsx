const authProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("auth_token", data.token); // Store token
        return Promise.resolve();
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
  logout: () => {
    localStorage.removeItem("auth_token");
    return Promise.resolve();
  },
  checkAuth: async () => {
    const token = localStorage.getItem("auth_token");
    if (!token) return Promise.reject();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/validate`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        return Promise.resolve();
      } else {
        return Promise.reject();
      }
    } catch (error) {
      return Promise.reject();
    }
  },
  checkError: (error) => {
    if (error.status === 401 || error.status === 403) {
      localStorage.removeItem("auth_token");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => Promise.resolve("admin"),
};

export default authProvider;
