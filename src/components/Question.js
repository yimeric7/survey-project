
export default function Question({ options, question, id, handleChange }) {
    return (
        <div>
            <br>
            </br>
            <form>
                <fieldset>
                    <h2>{id}. {question}</h2>
                    <p>
                        <input 
                            type="radio" 
                            id={id} 
                            name="option"
                            value="A" 
                            onChange={(e) => handleChange(parseInt(e.target.id), e.target.value) }
                            />
                        <label htmlFor={id} style={{paddingLeft:"10px"}} >{options[0]}</label>
                    </p>
                    <p>
                        <input 
                            type="radio" 
                            id={id} 
                            name="option"
                            value="B" 
                            onChange={(e) => handleChange(parseInt(e.target.id), e.target.value)}
                            />
                        <label htmlFor={id} style={{paddingLeft:"10px"}}>{options[1]}</label>
                    </p>
                </fieldset>
            </form>
        </div>
    )
}