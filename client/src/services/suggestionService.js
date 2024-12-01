const API_URL = "http://localhost:4000/suggest";

export const getSongs = async (query) => {
  const response = await fetch(`${API_URL}/songs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });
  return response.json();
};
