import React, { useState } from "react";
import './Set-Dark.css'

const Set = () => {
    const [isSet, setSet] = useState(true)

    const Set = () => setSet(!isSet)
    return (
        <div className={isSet ? "SetItem Set" : "SetItem Dark"}>
            <h6> {isSet ? "Set" : "Dark"}</h6>
            <button onClick={Set}> into {isSet ? "Dark" : "Set"}</button>
        </div>
    )
}

export default Set