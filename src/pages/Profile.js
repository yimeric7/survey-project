import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserNavBar from "../components/userNavBar";
import { useAuth } from '../contexts/AuthContext'
import { ref, onValue } from "firebase/database";
import { db } from "../backend/Firebase";
import { Link } from 'react-router-dom'
import Result from '../components/displayResult'
import {Navigate} from "react-router";

export default function ProfilePage() {
    const { currentUser } = useAuth();
    const [results, setResults] = useState([])

    useEffect(() => {
        try {
            onValue(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), (snapshot) => {
                setResults(snapshot.val())
            });
        } catch (e) {
            console.log(e)
        }
    }, [currentUser])

    const allResults = Object.keys(results).map((key) => [key, results[key]])

    return (
        <div>
            {currentUser ? (
                <>
                    <UserNavBar />
                    <Container>
                        <section style={{ position: 'relative', top: 50 }}>
                            <h1>
                                Profile:
                            </h1>
                            <strong>Email:</strong> {currentUser.email}
                        </section>
                        <section style={{ position: 'relative', top: 75 }}>
                            <h2>
                                Results:
                            </h2>
                            {results ? (
                                <div>
                                    {allResults.map(result => {
                                        return <Result key={allResults} result={result[1]} />
                                    })}
                                </div>
                            ) : (
                                <>
                                    <div> You haven't taken any surveys yet! Click
                                        <> </>
                                        <Link to="/survey">
                                            here
                                        </Link>
                                        <> </>
                                        to get started
                                    </div>
                                </>

                            )}
                        </section>
                    </Container>
                </>
                ) : ( <Navigate to='/'> </Navigate>
            )}
        </div>
    )
}
