interface Props {
    rank: string;
    suit: string;
};

const CardComponent: React.FC<Props> = ({rank, suit}) => {
    const getSuit = (suit:string) => {
        switch (suit) {
        case 'diams':
            return '♦';
        case 'hearts':
            return '♥';
        case 'clubs':
            return '♣';
        case 'spades':
            return '♠';
        default:
            throw new Error(`Error!`);
        };
    };
    return(
        <span className={`card rank-${rank} ${suit}`}>
            <span className="rank">{rank}</span>
            <span className="suit">{getSuit(suit)}</span>
        </span>
    );
};

export default CardComponent;