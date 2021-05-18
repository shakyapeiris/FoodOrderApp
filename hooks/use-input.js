import { useState } from 'react'

const useInput = (validator) => {

    //Steps to folloe
    /* 
    1. Storing the value entered by user
    2. Checkign whether it is valid
    3.is touched
    and complete validation
    */

    const [inputData, setInputData] = useState('')//step 1
    const [isClicked, setIsClicked] = useState(false)//step 3
    const isInputValid = validator(inputData)//step 2
    const hasNoError = isClicked && !isInputValid//step 4 and check whether there is an error after losing the focus

    const changeDataHandler = event => {//step 1
        setInputData(event.target.value)
    }

    const blurHandler = () => {//step 2
        setIsClicked(true)
    }


    return {
        inputData,
        isInputValid,
        hasNoError, // this will check whether there is an error or not
        changeDataHandler,
        blurHandler,
        //and that's it Thank You!
    }

}

export default useInput