import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router';
import UserNavBar from '../components/userNavBar';
import { useAuth } from '../contexts/AuthContext';
import { ref, onValue } from "firebase/database";
import { db } from "../backend/Firebase";
import Survey from "../components/QuestionList"

export default function SurveyPage() {
    const { currentUser } = useAuth()
    const [survey, setSurvey] = useState()

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
                <Container>
                    <Survey survey={survey}/>
                </Container>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </div>
    );
}
