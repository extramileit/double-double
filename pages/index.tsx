import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Card, stringToCard} from "../service/card";
import {findTopRankedPlayForHand, getDiscardHandsOutput, Result} from "../service/lookup";
import {useState} from "react";
import Display from "../components/display";


// const handleReset = () => {
//     let form = document.getElementById("cardInputForm") as HTMLFormElement;
//     form.reset();
//     setResult(null);
// }

export default function Home() {
    const [result, setResult] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        let card1 = event.target.card1.value;
        let card2 = event.target.card2.value;
        let card3 = event.target.card3.value;
        let card4 = event.target.card4.value;
        let card5 = event.target.card5.value;

        let hand = [];
        hand[0] = card1.toUpperCase();
        hand[1] = card2.toUpperCase();
        hand[2] = card3.toUpperCase();
        hand[3] = card4.toUpperCase();
        hand[4] = card5.toUpperCase();
        const cardsInHand: Card[] = hand.map((cardString) => {
            return stringToCard(cardString);
        });

        const result = findTopRankedPlayForHand(cardsInHand);
        setResult(result);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Double Double Bonus Poker</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <form onSubmit={handleSubmit} id='cardInputForm'>
                    <div>
                        <label>Card 1:
                            <input type="text" name="card1"/>
                        </label>
                    </div>
                    <div>
                        <label>Card 2:
                            <input type="text" name="card2"/>
                        </label>
                    </div>
                    <div>
                        <label>Card 3:
                            <input type="text" name="card3"/>
                        </label>
                    </div>
                    <div>
                        <label>Card 4:
                            <input type="text" name="card4"/>
                        </label>
                    </div>
                    <div>
                        <label>Card 5:
                            <input type="text" name="card5"/>
                        </label>
                    </div>
                    <div>
                        <input type="submit"/>
                        <button type="reset" onClick={() => setResult(null)}>Reset</button>
                    </div>
                </form>
                {
                    result != null && <Display discard={result.discard} play={result.play}></Display>
                }

            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel" className={styles.logo}/>
                </a>
            </footer>

            <style jsx>{`
              main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }

              footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
              }

              footer img {
                margin-left: 0.5rem;
              }

              footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: inherit;
              }

              code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo,
                Monaco,
                Lucida Console,
                Liberation Mono,
                DejaVu Sans Mono,
                Bitstream Vera Sans Mono,
                Courier New,
                monospace;
              }
            `}</style>

            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system,
                BlinkMacSystemFont,
                Segoe UI,
                Roboto,
                Oxygen,
                Ubuntu,
                Cantarell,
                Fira Sans,
                Droid Sans,
                Helvetica Neue,
                sans-serif;
              }

              * {
                box-sizing: border-box;
              }
            `}</style>
        </div>
    );
}
