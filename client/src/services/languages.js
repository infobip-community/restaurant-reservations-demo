export const getLanguages = async (token) => {
  const response = await fetch(`${APIPath}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      headers: { Authorization: token },
    },
  });
  const result = await response.json();
  console.log("__", result);
};
