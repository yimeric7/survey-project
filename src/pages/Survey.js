import React from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router';
import UserNavBar from '../components/userNavBar';
import { useAuth } from '../contexts/AuthContext';

export default function SurveyPage() {
    const { currentUser } = useAuth()
   
    return (
        <div> 
            {currentUser ? (
                <>  
                <UserNavBar />
                <Container>
                    
                </Container>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </div>
    );
}
