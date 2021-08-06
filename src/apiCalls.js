export const getMainCharacters = () => {
  return fetch(
    "https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo Baggins,Samwise Gamgee,Gollum,Saruman,Peregrin Took,Meriadoc Brandybuck,Elrond,Théoden,Faramir,Éowyn",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
      },
    }
  ).then((response) => response.json());
};

export const getCharacterQuote = async (characterId) => {
  const response = await fetch(
    `https://the-one-api.dev/v2/character/${characterId}/quote`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
      },
    }
  );
  return await response.json();
};
