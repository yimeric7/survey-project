import React from 'react';
import Question from './Question.js'

export default function Survey({ survey }) {
    return (
        <>
            <div>
                {survey?.map(question => {
                    return <Question question={question} key={question.id} />
                })}
            </div>
            
        </>
    )
}