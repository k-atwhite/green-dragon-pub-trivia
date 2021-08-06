export const getMainCharacters = async () => {
  const mainCharacters = await fetch(
    "https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo Baggins,Samwise Gamgee,Gollum,Saruman,Peregrin Took,Meriadoc Brandybuck,Elrond,Théoden,Faramir,Éowyn",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
      },
    }
  );
  const characters = await mainCharacters.json();
  const character =
    characters.docs[Math.floor(Math.random() * characters.docs.length)];
  return character;
};

export const getCharacterQuote = async (characterId) => {
  const characterQuotes = await fetch(
    `https://the-one-api.dev/v2/character/${characterId}/quote`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
      },
    }
  );
  const quotes = await characterQuotes.json();
  const quote =
    characterQuotes.docs[Math.floor(Math.random() * quotes.docs.length).dialog];
  return quote;
};

// export const getMainCharacters = () => {
//   return fetch(
//     "https://the-one-api.dev/v2/character?name=Gandalf,Frodo Baggins,Aragorn II Elessar,Legolas,Arwen,Galadriel,Gimli,Boromir,Bilbo Baggins,Samwise Gamgee,Gollum,Saruman,Peregrin Took,Meriadoc Brandybuck,Elrond,Théoden,Faramir,Éowyn",
//     {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
//       },
//     }
//   ).then((response) => response.json());
// };

// export const getCharacterQuote = (characterId) => {
//   return fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
//     },
//   }).then((response) => response.json());
// };
