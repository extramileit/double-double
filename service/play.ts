import { Card } from './card';
export enum Play {
    Royal_Flush,
    Four_Aces_2s_3s_4s_with_A_2_3_4_kicker,
    Four_of_a_kind,
    Straight_Flush,
    // Four_to_a_Royal_Flush,
    Discard_everything
}

export const cardsByPlayMap = new Map<Play, Card[][]>();
cardsByPlayMap.set(Play.Royal_Flush, [
    [{rank: 1, suit: 1}, {rank: 10, suit: 1}, {rank: 11, suit: 1}, {rank: 12, suit: 1}, {rank: 13, suit: 1}],
    [{rank: 1, suit: 2}, {rank: 10, suit: 2}, {rank: 11, suit: 2}, {rank: 12, suit: 2}, {rank: 13, suit: 2}],
    [{rank: 1, suit: 3}, {rank: 10, suit: 3}, {rank: 11, suit: 3}, {rank: 12, suit: 3}, {rank: 13, suit: 3}],
    [{rank: 1, suit: 4}, {rank: 10, suit: 4}, {rank: 11, suit: 4}, {rank: 12, suit: 4}, {rank: 13, suit: 4}]
]);
cardsByPlayMap.set(Play.Four_Aces_2s_3s_4s_with_A_2_3_4_kicker, [
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 2, suit: 1}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 2, suit: 2}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 2, suit: 3}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 2, suit: 4}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 3, suit: 1}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 3, suit: 2}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 3, suit: 3}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 3, suit: 4}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 4, suit: 1}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 4, suit: 2}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 4, suit: 3}],
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}, {rank: 4, suit: 4}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 1, suit: 1}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 1, suit: 2}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 1, suit: 3}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 1, suit: 4}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 3, suit: 1}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 3, suit: 2}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 3, suit: 3}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 3, suit: 4}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 4, suit: 1}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 4, suit: 2}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 4, suit: 3}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}, {rank: 4, suit: 4}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 1, suit: 1}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 1, suit: 2}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 1, suit: 3}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 1, suit: 4}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 2, suit: 1}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 2, suit: 2}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 2, suit: 3}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 2, suit: 4}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 4, suit: 1}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 4, suit: 2}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 4, suit: 3}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}, {rank: 4, suit: 4}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 1, suit: 1}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 1, suit: 2}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 1, suit: 3}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 1, suit: 4}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 2, suit: 1}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 2, suit: 2}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 2, suit: 3}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 2, suit: 4}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 3, suit: 1}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 3, suit: 2}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 3, suit: 3}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}, {rank: 3, suit: 4}]
]);
cardsByPlayMap.set(Play.Four_of_a_kind, [
    [{rank: 1, suit: 1}, {rank: 1, suit: 2}, {rank: 1, suit: 3}, {rank: 1, suit: 4}],
    [{rank: 2, suit: 1}, {rank: 2, suit: 2}, {rank: 2, suit: 3}, {rank: 2, suit: 4}],
    [{rank: 3, suit: 1}, {rank: 3, suit: 2}, {rank: 3, suit: 3}, {rank: 3, suit: 4}],
    [{rank: 4, suit: 1}, {rank: 4, suit: 2}, {rank: 4, suit: 3}, {rank: 4, suit: 4}],
    [{rank: 5, suit: 1}, {rank: 5, suit: 2}, {rank: 5, suit: 3}, {rank: 5, suit: 4}],
    [{rank: 6, suit: 1}, {rank: 6, suit: 2}, {rank: 6, suit: 3}, {rank: 6, suit: 4}],
    [{rank: 7, suit: 1}, {rank: 7, suit: 2}, {rank: 7, suit: 3}, {rank: 7, suit: 4}],
    [{rank: 8, suit: 1}, {rank: 8, suit: 2}, {rank: 8, suit: 3}, {rank: 8, suit: 4}],
    [{rank: 9, suit: 1}, {rank: 9, suit: 2}, {rank: 9, suit: 3}, {rank: 9, suit: 4}],
    [{rank: 10, suit: 1}, {rank: 10, suit: 2}, {rank: 10, suit: 3}, {rank: 10, suit: 4}],
    [{rank: 11, suit: 1}, {rank: 11, suit: 2}, {rank: 11, suit: 3}, {rank: 11, suit: 4}],
    [{rank: 12, suit: 1}, {rank: 12, suit: 2}, {rank: 12, suit: 3}, {rank: 12, suit: 4}],
    [{rank: 13, suit: 1}, {rank: 13, suit: 2}, {rank: 13, suit: 3}, {rank: 13, suit: 4}]
]);

cardsByPlayMap.set(Play.Straight_Flush, [
    [{rank: 1, suit: 1}, {rank: 2, suit: 1}, {rank: 3, suit: 1}, {rank: 4, suit: 1}],
    [{rank: 1, suit: 2}, {rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}],
    [{rank: 1, suit: 3}, {rank: 2, suit: 3}, {rank: 3, suit: 3}, {rank: 4, suit: 3}],
    [{rank: 1, suit: 4}, {rank: 2, suit: 4}, {rank: 3, suit: 4}, {rank: 4, suit: 4}],
    [{rank: 2, suit: 1}, {rank: 3, suit: 1}, {rank: 4, suit: 1}, {rank: 5, suit: 1}],
    [{rank: 2, suit: 2}, {rank: 3, suit: 2}, {rank: 4, suit: 2}, {rank: 5, suit: 2}],
    [{rank: 2, suit: 3}, {rank: 3, suit: 3}, {rank: 4, suit: 3}, {rank: 5, suit: 3}],
    [{rank: 2, suit: 4}, {rank: 3, suit: 4}, {rank: 4, suit: 4}, {rank: 5, suit: 4}],
]);
// 3 of a kind: Aces
// Full House
// Flush
// Straight
// 3 of a kind: 2s thru Ks
// 4 to a Straight Flush
// 1 pair: Aces
// 2 pair
// 3 to a Royal Flush: JQK
// 1 pair: Kings
// 3 to a Royal Flush: TJQ
// 1 pair: Jacks or Queens
// 4 to a Flush
// 3 to a Royal Flush: TJK/TQK, TJA/TQA/TKA/JQA/JKA/QKA
// 4 to a Straight: 89TJ, 9TJQ, TJQK
// 1 pair: 2s thru 10s
// 4 to a Straight: 2345, 3456, 4567, 5678, 6789, 789T
// 3 to a Straight Flush: 345, 456, 567, 678, 789, 89T, 89J/8TJ, 8JQ, 9TJ, 9TQ/9JQ, 9JK/9QK
// 4 to a Straight: JQKA
// 2 to a Royal Flush: JQ, JK/QK, JA/QA/KA
// 4 to a Straight: 9JQK, TJQA/TJKA/TQKA
// 3 to a Straight Flush: Ace-low, 234/235/245, 346/356, 457/467, 568/578, 679/689, 78T/78J/79J, 79T/7TJ, 89Q/8TQ, 9TK
// 3 to a Straight: JQK
// 4 to a Straight: 89JQ/8TJQ, 9TJK/9TQK
// 2 to a Straight: JQ
// 1 high card: Ace
// 2 to a Royal Flush: TJ
// 2 to a Straight: JK/QK
// 3 to a Flush: 2TK to 8TK
// 2 to a Royal Flush: TQ, TK
// 1 high card: J/Q/K
// 3 to a Straight Flush: 236/246/256, 347/357/367, 458/468/478, 569/579/589, 67T/68T/69T
// 4 to a Straight: 2346/2356/2456, 3457/3467/3567, 4568/4578/4678, 5679/5689/5789, 678T/679T/689T
// Discard everything
// }