import axios from "axios";

export const LoginFunc = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return { ...data, status: true };
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const validateTokenFunc = async () => {
  const response = await fetch(
    "http://localhost:5000/api/users/validate-token",
    { credentials: "include" }
  );
  if (!response.ok) {
    console.log("happy2");
    return false;
  } else {
    console.log("happy");
    return true;
  }
};

export const logoutFunc = async () => {
  const response = await axios.post(
    "http://localhost:5000/api/users/logout",
    "",
    {
      withCredentials: true,
    }
  );
  if (!response.ok) {
    throw new Error("Error while logging out");
  } else return true;
};

export const LoginGoogleFunc = async () => {
  try {
    const response = await axios.get("http://localhost:5000/auth/google", {
      withCredentials: true,
    });
    // const data = response;
    console.log(response, "d");
    return { status: true };
  } catch (error) {
    console.log(error, "s");
    throw new Error(error);
  }
};
