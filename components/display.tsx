import {getDiscardHandsOutput} from "../service/lookup";

export default function Display({ play, discard}) {
    const truncateText = (text: string) : string => {
        const charLimit = 50;
        if (!text || text.length <= charLimit) {
            return text;
        }
        return text.substring(0, charLimit) + "...";
    }

    return (
        <div>
            <h4>{truncateText(play)}</h4>
            <strong>{getDiscardHandsOutput(discard)}</strong>
        </div>
    );
}