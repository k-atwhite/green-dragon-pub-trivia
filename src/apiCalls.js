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

export const getMainCharacter = () => {
  console.log("Character API WAS CALLED");
  let randomName = names[Math.floor(Math.random() * names.length)];

  return fetch(`https://the-one-api.dev/v2/character?name=${randomName}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};

export const getCharacterQuotes = (characterId) => {
  console.log("Quote API WAS CALLED");

  return fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};

///// API CALL TO GET ALL CHARACTERS ///////////

export const getAllCharacters = () => {
  console.log("All Characters API WAS CALLED");

  let joinedNames = names.join(",");

  return fetch(`https://the-one-api.dev/v2/character?name=${joinedNames}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
    },
  }).then((response) => response.json());
};

//  const names = [
//    "Gandalf",
//    "Frodo Baggins",
//    "Aragorn II Elessar",
//    "Legolas",
//    "Arwen",
//    "Galadriel",
//    "Gimli",
//    "Boromir",
//    "Bilbo Baggins",
//    "Samwise Gamgee",
//    "Gollum",
//    "Saruman",
//    "Peregrin Took",
//    "Meriadoc Brandybuck",
//    "Elrond,Théoden",
//    "Faramir",
//    "Éowyn",
//  ];

// let characterIds = [
//   "5cd99d4bde30eff6ebccfbe6",
//   "5cd99d4bde30eff6ebccfc07",
//   "5cd99d4bde30eff6ebccfc38",
//   "5cd99d4bde30eff6ebccfc57",
//   "5cd99d4bde30eff6ebccfcc8",
//   "5cd99d4bde30eff6ebccfcef",
//   "5cd99d4bde30eff6ebccfc15",
//   "5cd99d4bde30eff6ebccfd06",
//   "5cd99d4bde30eff6ebccfea0",
//   "5cd99d4bde30eff6ebccfd23",
//   "5cd99d4bde30eff6ebccfe9e",
//   "5cd99d4bde30eff6ebccfd81",
//   "5cd99d4bde30eff6ebccfc7c",
//   "5cd99d4bde30eff6ebccfe2e",
//   "5cd99d4bde30eff6ebccfd0d",
//   "5cd99d4bde30eff6ebccfea4",
//   "5cd99d4bde30eff6ebccfe19",
//   "5cdbdecb6dc0baeae48cfa59",
// ]
