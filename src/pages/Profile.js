import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserNavBar from "../components/userNavBar";
import { useAuth } from '../contexts/AuthContext'
import { Navigate } from "react-router";
import { ref, onValue } from "firebase/database";
import { db } from "../backend/Firebase";
import { Link } from 'react-router-dom'
import Result from '../components/displayResult'

export default function ProfilePage() {
    const { currentUser } = useAuth();
    const [results, setResults] = useState([])

    useEffect(() => {
        onValue(ref(db, `surveys/${currentUser.email}`.slice(0, -4)), (snapshot) => {
            setResults(snapshot.val())
        });
    }, [])

    var allResults = Object.keys(results).map((key) => [key, results[key]]);

    console.log(allResults);

    // const finalResults = [];

    // console.log(allResults[1])

    // for (let i = 0; i < allResults.length; i++) {
    //     const tempResults = allResults[i] // key , value
    //     finalResults.push(tempResults[1]) //value value
    // }

    // console.log(finalResults);

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

                    <span style={{ position: 'relative', top: 110}}>
                        {results ? (
                            <div>
                                {/* {allResults.map(parentResult => {
                                    parentResult.map()
                                })}

                                }
                                {results.map(result => {
                                    return <Result result={result} />
                                })} */}
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
                    </span>
                </Container>
                </>
            ) : (
                <Navigate to="/"></Navigate>
            )}
        </div>
    )
}
