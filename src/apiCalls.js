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

// export const getCharacterQuote = (characterId) => {
//   return fetch(`https://the-one-api.dev/v2/character/${characterId}/quote`, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
//     },
//   }).then((response) => response.json());
// };

// useEffect(() => {
//   const headers = {
//     Accept: "application/json",
//     Authorization: "Bearer Qdwh7zeW6AgFOOGNGAr4",
//   };
//   const fetchData = async () => {
//     const rawQuotes = await fetch("https://the-one-api.dev/v2/quote", {
//       headers: headers,
//     });
//     const quotes = await rawQuotes.json();
//     const quote = quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
//     setQuote(quote.dialog);
//     const rawCharacters = await fetch(
//       "https://the-one-api.dev/v2/character?_id=" + quote.character,
//       { headers: headers }
//     );
//     const characters = await rawCharacters.json();
//     const character = characters.docs[0];
//     setCharacter(character.name);
//   };

//   fetchData();
// }, []);
