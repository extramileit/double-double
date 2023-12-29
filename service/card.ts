export type Rank =
    | 'A' | '2' | '3'  | '4' | '5' | '6' | '7'
    | '8' | '9' | '10' | 'J' | 'Q' | 'K'

export type Suit = 'H' | 'D' | 'S' | 'C';

export type Card = {
    rank: number;
    suit: number;
};

export const rankToNumber = (rank: Rank): number =>
    rank === 'A'  ? 1
        : rank === 'J' ? 11
            : rank === 'Q' ? 12
                : rank === 'K' ? 13
                    : Number(rank);

export const suitToNumber = (suit: Suit): number =>
    suit === 'H' ? 1
        : suit === 'D' ? 2
            : suit === 'S' ? 3
                : /* suit === "C" */ 4;

export const numberToSuit = (suitNumber: number): Suit =>
    suitNumber === 1 ? 'H'
        : suitNumber === 2 ? 'D'
            : suitNumber === 3 ? 'S'
                : /* suit === "C" */ 'C';


export const stringToCard = (cardString: String): { rank: number, suit: number } => {
    return {
        rank: rankToNumber(cardString.substring(0, cardString.length - 1) as Rank),
        suit: suitToNumber(cardString.at(-1) as Suit)
    }
}

export const cardToString = (card: Card): String => {
    return '' + card.rank + numberToSuit(card.suit);
}

