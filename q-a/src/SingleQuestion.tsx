import {useState} from 'react'

const SingleQuestion = ({id, title, info}) => {

const [showInfo, setShowInfo] = useState(false);

    return(
        <>
            <article>
                <h2>{title}</h2>
                { showInfo?
                <>
                <button onClick={()=>setShowInfo(false)}>-</button>
                <p>{info}</p>
                </> : 
                <>
                <button onClick={()=>setShowInfo(true)}>+</button>
                </>
                }
                
            </article>
        </>
    );
}

export default SingleQuestion;