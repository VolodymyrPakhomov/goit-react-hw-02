import { useState, useEffect } from "react";
import Feedback from "./Feedback/Feedback";
import Options from "./Options/Options";
import Notification from "./Notification/Notification";

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem("feedback");
        if (savedFeedback !== null) {
        return JSON.parse(savedFeedback);
        }
        return {good: 0, neutral: 0, bad: 0 };
    });

    const updateFeedback = (feedbackType) => {
        setFeedback({
            ...feedback,
            [feedbackType]: feedback[feedbackType] + 1,
        });
    };

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };

    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    },[feedback])

    return (
    <>
        <h1>Sip Happens Café</h1>
        <p>Please leave your feedback about our service by selecting one of the options below.</p>

        <Options 
            updateFeedback={updateFeedback}
            totalFeedback ={totalFeedback} 
            resetFeedback = {resetFeedback}
        />

        {totalFeedback > 0 ? (
        <Feedback 
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positiveFeedback ={positiveFeedback}
        />
        ) : (
        <Notification message="No feedback yet" />
        )}
    </>
    );
};

export default App;
