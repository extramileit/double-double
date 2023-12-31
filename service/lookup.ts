import {Card, cardToString, stringToCard} from "./card";
import {cardsByPlayMap, Play} from "./play";


const isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
}

const isCardMatch = (card1: Card, playCard: Card): boolean => {
    return (playCard.rank === 0 || (playCard.rank === card1.rank)) && (playCard.suit === 0 || (playCard.suit === card1.suit));
}

type MatchingPlayResult = {isMatch: boolean, discard: Card[]};

export const isHandMatchingPlayHand = (hand: Card[], playHand: Card[]): MatchingPlayResult => {
    const discardSet = new Set(hand);
    const playHandSet = new Set<Card>(playHand);
    for (const handCard of hand) {
        var isMatchFound = false;
        for (const playCard of Array.from(playHandSet)) {
            if (isCardMatch(handCard, playCard)) {
                playHandSet.delete(playCard);
                discardSet.delete(handCard);
                isMatchFound = true;
                break;
            }
        }
    }
    if (playHandSet.size == 0) {
        return {isMatch: true, discard: Array.from( discardSet)};
    }
    return {isMatch: false, discard: undefined};
}

const isHandMatchingPlayHands = (hand: Card[], playHands: Card[][]): MatchingPlayResult => {
    for (const playHand of playHands) {
        const matchingPlayResult = isHandMatchingPlayHand(hand, playHand);
        if (matchingPlayResult.isMatch) {
            return matchingPlayResult;
        }
    }
    return {isMatch: false, discard: undefined};
}

export type Result = { play: Play; discard: Card[] };

export const findTopRankedPlayForHand = (hand: Card[]): Result => {

    for (const p in Play) {
        const value = Play[p]
        if (isNumeric(value)) {
            // console.log('checking play: ' + p);
            const key = Number(value);
            const playHands = cardsByPlayMap.get(key);
            if (playHands === undefined) {
                continue;
            }

            const matchingPlayResult = isHandMatchingPlayHands(hand, playHands);
            if (matchingPlayResult.isMatch) {
                // console.log('found match');
                return {
                    play: Play[value],
                    discard: matchingPlayResult.discard
                }
            }
        }
    }
    return {
        play: Play['' + Play.Discard_everything],
        discard: hand
    }
}

export const getDiscardHandsOutput = (discardCards: Card[]) : String => {
    let discardCardsCount = discardCards.length;
    if (discardCardsCount === 0) {
        return 'keep all cards!';
    }
    if (discardCardsCount === 5) {
        return '';
    }
    let output = 'discard:\n';
    discardCards.forEach((card, index) => {
        output += cardToString(card);
        if (index < (discardCardsCount - 1)) {
            output += ', ';
        }
    });
    return output;
}

const hand = ['5D', '3H', '8S', '6D', '9C'];
console.log('hand: ' + hand);


const cardsInHand: Card[] = hand.map((cardString) => {
    return stringToCard(cardString);
})

console.log(cardsInHand);

const result = findTopRankedPlayForHand(cardsInHand);
console.log('play: ' + result.play);
getDiscardHandsOutput(result.discard);


