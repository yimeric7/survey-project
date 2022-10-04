import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Container } from 'react-bootstrap'
import NewNavBar from '../components/defaultNavBar';

export default function HomePage() {
    const { currentUser } = useAuth();

    return (
        <>
                {currentUser ? (
                    <>
                    <Container>
                        <div style={{fontSize:"33px", position: 'absolute', top: 124}}>
                        To start the survey, click <Link to="/survey">here</Link>
                        </div>
                    </Container>
                    </>
                ) : (
                    <>
                    <NewNavBar />
                    <div align="center" style={{fontSize:"33px", position: 'absolute', top: 124}}>
                    To take the Myers Briggs Personality test, sign up <Link to="/signup">here</Link>
                    </div>
                    </>
                )} 
        </>
    );

}
