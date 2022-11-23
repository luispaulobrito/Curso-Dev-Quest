import { useState, useEffect } from "react";
import Form from '../../components/forms/form.js'

async function createDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  );
  const deck = await response.json();
  return deck.deck_id;
}

async function getCards(deckId) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
  );
  return await response.json();
}


const CardsList = (props) => {
  return(
      <ul>
        {props.cards.map((card, index) => {
          return (
            <li key={index}>
              <img src={card.image} alt={card.value} />
            </li>
          );
        })}
      </ul>
  )  
}

const DeckOfCards = () => {
  const [deck, setDeck] = useState({
    cards: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck();
      const cards = await getCards(deckId);

      setDeck({
        cards: cards.cards,
      });
    };
    fetchData();
  },[]);

  const addCard = (newCard) => {
    console.log(newCard);
    setDeck({
      cards: [...deck.cards, newCard] //aqui está criando um array novo com o array antigo mais o novo objeto que será adicionado
    })
  }
  

  return (
    <section>
      <Form addCard={addCard}/>
      {deck.cards.length > 0 ? <CardsList cards={deck.cards} /> : "Nenhuma carta encontrada"}
    </section>
  )
}

export default DeckOfCards;
