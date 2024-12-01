const API_URL = "http://localhost:4000/game";

export const getWord = async () => {
  const response = await fetch(`${API_URL}/getword`);
  return response.json();
};

export const newWord = async () => {
  const response = await fetch(`${API_URL}/newword`);
  return response.json();
};

export const guessSong = async (artist, title) => {
  const response = await fetch(`${API_URL}/guess`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ artist, title }),
  });
  return response.json();
};
