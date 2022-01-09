import React, {memo, useEffect, useMemo, useState} from 'react'

const Hello = ({}) => {
    const [state, setState] = useState(0)

    const handleClick = () => {
        setState(prevState => prevState + 10)
    }

    useEffect(() => {
        if (state >= 100 && state <= 150) {
            setState(prevState => prevState + 20)
        }


    }, [state])


    const a = useMemo(() => 3 , [state])


    return (<>
        <button onClick={handleClick}> Button</button>
        <div>

            counter value : {state}


        </div>

    </>)
}

export const Hi = ({name}) => <div>

    hello {name}

</div>


export default memo(Hello)
