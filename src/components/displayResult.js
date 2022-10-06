import { useNavigate } from "react-router"
import { Button } from 'react-bootstrap'

export default function Result({ result }) {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()

        // input into database 
        const finalAnswers = Array.from(result).sort((a,b) => a[0]-b[0])
        navigate('/results', {state: finalAnswers})
    }

    return (
        <Button onClick={handleClick}>
            SHOW RESULTS
        </Button>
    )
}