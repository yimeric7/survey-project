import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserNavBar from "../components/userNavBar";
import { useAuth } from '../contexts/AuthContext'
import { ref, onValue } from "firebase/database";
import { db } from "../backend/Firebase";
import { Link } from 'react-router-dom'
import Result from '../components/displayResult'
import {useNavigate} from "react-router";

export default function ProfilePage() {
    const { currentUser } = useAuth();
    const navigate = useNavigate()
    const [results, setResults] = useState([])
    const [allResults, setAllResults] = useState([])

    useEffect (() => {
        if (currentUser === null)
            navigate('/')
    })

    useEffect(() => {
        try {
            onValue(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), (snapshot) => {
                setResults(snapshot.val())
            });
            setAllResults(Object.keys(results).map((key) => [key, results[key]]))
        }
        catch (e) {
            console.log(e)
        }
    }, [results])

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
                ) : (
                    <>
                    </>
            )}
        </div>
    )
}
