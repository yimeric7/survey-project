import React, { useState } from 'react';

export default function Question({ question }) {
    const [survey, setSurvey] = useState(new Map());

    return (
        <div>
            <br>
            </br>
            <form>
                <fieldset>
                    <h2>{question.id}. {question.question}</h2>
                    <p>
                        <input 
                            type="radio" 
                            id={question.id} 
                            name="option"
                            value="A" 
                            onChange={(e) => {
                                setSurvey(survey.set(e.target.id, e.target.value));
                                console.log(survey);
                            }}
                            />
                        <label for={question.id}>{question.options[0]}</label>
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            id={question.id} 
                            name="option"
                            value="B" 
                            onChange={(e) => {
                                setSurvey(survey.set(e.target.id, e.target.value));
                                console.log(survey);
                            }}
                            />
                        <label for={question.id}>{question.options[1]}</label>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}