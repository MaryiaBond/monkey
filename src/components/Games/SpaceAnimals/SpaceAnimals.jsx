import React, {useState, useEffect, useRef} from 'react';
import {reduxForm, Field} from 'redux-form/lib/immutable';
import classes from '../SpaceAnimals/SpaceAnimals.module.css'
import {NavLink} from "react-router-dom";


const SpaceAnimals = React.memo(props => {
        // const delay = 1000;

        function useInterval(callback, delay) {
            const savedCallback = useRef();
            // Remember the latest callback.
            useEffect(() => {
                savedCallback.current = callback;
            }, [callback]);

            // Set up the interval.
            useEffect(() => {
                function tick() {
                    savedCallback.current();
                }

                if (delay !== null) {
                    let id = setInterval(tick, delay);
                    return () => clearInterval(id);
                }
            }, [delay]);
        }

        const initName = props.animalShortNames[Math.floor(Math.random() * props.animalShortNames.length)]
        let higher = 1000
        let [modeText, setModeText] = useState("Норм режим");
        const [point, setPoint] = useState(0);
        let [count, setCount] = useState(8);
        let [errors, setErrors] = useState(0);
        let [classMode, setClassMode] = useState('normMode');
        let [trueText, setTrueText] = useState(true);
        let [permanentName, setTrueName] = useState('пано');
        if (count == 0 && errors == 0) {
            setModeText("Режим суперчувачка")
            setCount(10);
            setClassMode('coolMode')
        }

        if (count == 0 && errors > 0) {
            setModeText("Режим улиточкинса")
            setCount(5);
            setClassMode('slateMode')
            setErrors(errors - 1)
        }
        useInterval(() => {
            // Your custom logic here
            setCount(count - 1);
        }, higher);

        // useEffect (()=> {
        //     setInterval (timer ++ , 1000)

        // }, [timer])

        let checkThisName = (value) => {
            if (permanentName.includes(value.enteredName) && value.enteredName !== "") {
                setTrueName(initName)
                setTrueText(true)
                setPoint(point + 1)
            } else {
                setErrors(errors + 1)
                setTrueText(false)
            }
            value.enteredName = "";
        }


        return (
            <div className={classes.absolutePos}>
                <NavLink to="/games"> <div className={classes.close}>Exit game</div></NavLink>
                <div className={
                    classMode == 'normMode' ?
                        classes.normModeClass + " " + classes.gridGlobal :
                        classMode == 'coolMode' ?
                            classes.coolMode + " " + classes.gridGlobal :
                            classes.slateMode + " " + classes.gridGlobal
                }>
                    <h1 className={classes.h1}>{modeText}</h1>
                    <div className={classes.gridContainer}>
                        <div>
                            <div>Time limit</div>
                            <div className={classes.greenColor}>Current point</div>
                            <div className={classes.redColor}>Current errors</div>
                        </div>
                        <div>
                            <div className={trueText ? classes.defaultText : classes.errorText}>{permanentName}</div>
                        </div>
                        <div>
                            <div>{count}</div>
                            <div>{point}</div>
                            <div>{errors}</div>
                        </div>


                    </div>
                    <div>
                        <AnimalForm onSubmit={checkThisName}/>
                    </div>
                </div>
            </div>
        )
    }
)
const AnimalFormRedux = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field autoFocus={true} name="enteredName" component={"input"}/>
        </form>
    )
}
const AnimalForm = reduxForm({form: "spaceAnimals"})(AnimalFormRedux)
export default SpaceAnimals;
