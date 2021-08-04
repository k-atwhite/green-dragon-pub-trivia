export const fetchAllCharacters = () => {
  return fetch("https://the-one-api.dev/v2/character", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};
