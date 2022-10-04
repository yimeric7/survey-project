import React from "react";
import { Container } from "react-bootstrap";
import UserNavBar from "../components/userNavBar";
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from "react-router";

export default function ResultPage() {
    const { currentUser } = useAuth();

    return (
        <div> 
            {currentUser ? (
                <>  
                <UserNavBar />
                <Container>
                    <h1 style={{ position: 'relative', top: 50 }}>
                        Profile: 
                    </h1>
                    <span style={{ position: 'relative', top: 60}}>
                        <strong>Email:</strong> {currentUser.email}
                    </span>
                    
                    <h2 style={{ position: 'relative', top: 100 }}>
                        Results:
                    </h2>
                    {/* display results */}

                    <span style={{ position: 'relative', top: 110}}>
                        You haven't taken any surveys yet!
                    </span>
                </Container>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </div>
    )
}
