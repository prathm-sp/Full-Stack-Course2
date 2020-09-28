import React, { useState, useEffect } from 'react'

export default function Statistic({ text, value }) {
    var [good, setGood] = useState(0);
    var [neutral, setNeutral] = useState(0);
    var [bad, setBad] = useState(0);
    var [all, setAll] = useState();
    var [positive, setPositive] = useState();
    var [feedback, setFeedback] = useState(false);

    useEffect(() => {
        setAll(good + neutral + bad);
        setPositive((good * 100) / all);
    })

    function handleButton(e) {
        setFeedback(true);
        if (e === 'g') {
            setGood(prevGood => prevGood + 1);
        }
        else if (e === 'n') {
            setNeutral(prevGood => prevGood + 1);
        }
        else if (e === 'b') {
            setBad(prevGood => prevGood + 1);
        }
        setAll(prevGood => prevGood + 1)
    }

    const Feddback = () => {
        if (feedback) {
            return (
                <div>
                    <table>
                        <tr>
                            <td>good</td>
                            <td> {good} </td>
                        </tr>
                        <tr>
                            <td>
                                neutral
                            </td>
                            <td>
                                {neutral}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                bad
                            </td>
                            <td>
                                {bad}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                all
                            </td>
                            <td>
                                {all}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                positive
                            </td>
                            <td>
                                {positive}
                            </td>
                        </tr>
                    </table>
                </div>
            )
        }
        return (
            <p>No feedback given</p>
        )
    }


    return (
        <div>
            <button onClick={() => handleButton('g')}>good</button>
            <button onClick={() => handleButton('n')}>neutral</button>
            <button onClick={() => handleButton('b')}>bad</button>
            <Feddback />
        </div>
    )
}
