const names = [
  "Gandalf",
  "Frodo Baggins",
  "Aragorn II Elessar",
  "Legolas",
  "Arwen",
  "Galadriel",
  "Gimli",
  "Boromir",
  "Bilbo Baggins",
  "Samwise Gamgee",
  "Gollum",
  "Saruman",
  "Peregrin Took",
  "Meriadoc Brandybuck",
  "Elrond,Théoden",
  "Faramir",
  "Éowyn",
];

export const getCharacterQuotes = (characterId) => {
  console.log("Quote API was called!");
  return fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};

export const getAllCharacters = () => {
  console.log("Character API was called!");
  let joinedNames = names.join(",");

  return fetch(`https://the-one-api.dev/v2/character?name=${joinedNames}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};
