import { useState } from "react";

async function createDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
  );
  return await response.json();
}

const DeckOfCards = () => {
  const [deck, setDeck] = useState({
    cards: [],
  });
  return (
    <section>
      <ul>
        {deck.cards.map((card, index) => {
          <li key={index}>
            <img src={card.image} alt={card.value} />
          </li>;
        })}
      </ul>
    </section>
  );
};
//     constructor(){
//         super()
//         this.state = {
//             cards: []
//         }
//     }

//     async componentDidMount(){
//         const deckId = await createDeck()
//         const cards = await getCards(deckId)
//         this.setState({
//             cards: cards.cards
//         })
//     }

//     render(){
//         return (

//         )
//     }
// }

export default DeckOfCards;
