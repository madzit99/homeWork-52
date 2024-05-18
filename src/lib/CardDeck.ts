import Card from "./Card";

class CardDeck {
    public cards: Card[] = [];
    private ranks: string[] = ['2','3','4','5','6','7','8','9','10','j','q','k','t'];
    private suits: string[] = ['diams','hearts','clubs','spades'];

    constructor()
    {
        for (const suit of this.suits) {
            for (const rank of this.ranks) {
                const card = new Card(rank, suit);
                this.cards.push(card);
            }
        }
    };

    getCard() {
        const random = Math.floor(Math.random() * this.cards.length);
        const card = this.cards.splice(random, 1)[0];
        return card;
    };

    getCards(howMany: number) {
        const cards:Card[] = [];

        for(let i = 0; i < howMany; i++) {
            cards.push(this.getCard());
        };
        return cards; 
    }
}

export default CardDeck;