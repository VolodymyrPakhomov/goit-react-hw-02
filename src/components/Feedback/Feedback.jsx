export default function Feedback(
    { good, neutral, bad, total, positiveFeedback }) {
    return (
    <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive : {positiveFeedback}%</p>
    </div>
    );
}
