import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';
import UserNavBar from '../components/userNavBar';
import { useAuth } from '../contexts/AuthContext';
import { ref, onValue, push } from "firebase/database";
import { db } from "../backend/Firebase";
import Question from '../components/Question'

export default function SurveyPage() {
    const { currentUser } = useAuth()
    const [survey, setSurvey] = useState([]) 
    const [answers, setAnswers] = useState(new Map())
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleChange = (id, value) => {
        setAnswers(answers.set(id, value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const finalAnswers = Array.from(answers).sort((a,b) => a[0]-b[0]);
        
        if (answers.size === survey.length) {
            try {
                push(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), {
                    results: finalAnswers
                });
            } catch (e) {
                console.log(e)
            } finally {
                navigate('/results', {state: finalAnswers})
            }
        }
        else 
            setError('Answer all questions to get results!')
    }

    useEffect(() => {
        onValue(ref(db, "questions/-NDZpE1fZz_mqeYNgn--"), (snapshot) => {
            setSurvey(snapshot.val())
        });
    }, [])

    return (
        <div> 
            {currentUser ? (
                <>  
                <UserNavBar />
                <Container
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                    >
                    <Card className="w-100" style={{maxWidth: '1000px', alignItems: 'center' }}>
                        <div className="w-100"  style={{ maxWidth: '800px' }}>
                            {survey?.map(question => {
                                return <Question options={question.options} question={question.question} id={question.id} handleChange={handleChange} key={question.id} />
                            })}
                        </div>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <br></br>
                        <Button onClick={handleSubmit} type="submit">SHOW RESULTS</Button>
                    </Card>
                </Container>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </div>
    );
}
