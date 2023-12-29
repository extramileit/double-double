import {getDiscardHandsOutput} from "../service/lookup";

export default function Display({ play, discard}) {

    return (
        <div>
            <h2>{play}</h2>
            <h3>{getDiscardHandsOutput(discard)}</h3>
        </div>
    );
}