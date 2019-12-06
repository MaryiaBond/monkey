import React, {useState, useEffect, useRef} from 'react';
import classes from '../CatEatBrad/CatEatBrad.module.css'
import {NavLink} from "react-router-dom";
import {Animated} from "react-animated-css";


const CatEatBrad = ({currentSize, ...props}) => {


        useEffect(() => {
            catFood.current.style = styleGrid;
        })
        useEffect(() => {
            setPosX(currentSize)
            setPosY(currentSize)
        }, [currentSize])
        let currentLevel = props.currentLevel; //for future realization
        let goToNextLevel = () => {
            setVisible(true)
            setEndAnimation(false)
            props.setCurrentLevel(currentLevel)
        }
        let levelClass = 'levelGrid' + currentLevel;
        let catFood = useRef(null);
        let [visible, setVisible] = useState(true);
        let [endAnimation, setEndAnimation] = useState(false);
        let [posX, setPosX] = useState(currentSize);
        let [posY, setPosY] = useState(currentSize);
        let finish = posX === 1 && posY === 1;
        let isBorder = (setPos) => {
            //current level must have self border . take this from props
            let brdX = (setPos[0] !== currentSize + 1 && setPos[0] !== 0);
            let brdY = (setPos[1] !== currentSize + 1 && setPos[1] !== 0);
            if (brdX && brdY) {
                return true
            }
            else {
                return false
            }
        }
        let styleGrid = 'grid-column: ' + posX + ';' + 'grid-row: ' + posY;

    useEffect(() => {
        let x;
        x++
        console.log(x)
    }, [posX, posY])
    let goToFinish = (e) => {
        let target = e.target.id;
        let setPos = targetDirections[target].position;
        let brd = isBorder(setPos);
        if(!finish) {
            if(brd) {
                setPosX(setPos[0]) ;
                setPosY(setPos[1]) ;
                catFood.current.style = styleGrid
            }
                    }
        else {
            props.setCurrentSize(currentSize)
            setVisible(false)
            setEndAnimation(true)
        }
    }
    const targetDirections = {
        turnRight: {
            position: [posX + 1, posY]
        },
        goAhead: {
            position: [posX, posY - 1]
        },
        goDown: {
            position: [posX, posY + 1]
        },
        turnLeft: {
            position: [posX - 1, posY]
        }
    }



        return (
            <div className={classes.absolutePos}>
                <NavLink to="/games">
                    <div className={classes.close}>Exit game</div>
                </NavLink>
                <Animated animationIn="shake" animationInDuration={1000}
                          animationOutDuration={1000} isVisible={endAnimation} className={!endAnimation && classes.hidden}>
                    <div className={classes.catEat}>
                        <div onClick={goToNextLevel} className={classes.nextLevel}>Next LEVEL</div>
                    </div>
                </Animated>
                <div className={endAnimation && classes.hidden}>
                <div className={endAnimation && classes.hidden}>
                    <div onClick={goToFinish} id='turnLeft' className={classes.feed}>Накормить</div>
                </div>
                <div className={classes.gridContainer + ' ' + levelClass}>
                    <div ref={catFood} className={classes.foodPos}>
                        <Animated animationIn="shake" animationOut="zoomOutDown" animationInDuration={1000}
                                  animationOutDuration={1000} isVisible={visible}>
                            <div className={classes.food}> </div>
                        </Animated>
                    </div>

                </div>
                <Animated animationIn="lightSpeedIn" animationOut="tada" animationInDuration={1000}
                          animationOutDuration={1000} isVisible={true}>
                    <div className={classes.arrows}>
                        <div id='turnLeft' onClick={goToFinish} className={classes.leftArrow}> </div>
                        <div id='goAhead' onClick={goToFinish} className={classes.straightArrow}> </div>
                        <div id='turnRight' onClick={goToFinish} className={classes.rightArrow}> </div>
                        <div id='goDown' onClick={goToFinish} className={classes.downArrow}> </div>
                    </div>
                </Animated>
                </div>
            </div>
        )
    }

//create one function for all btns: goToFinish. this function get argument left, top, right or down. We describe this arguments
export default CatEatBrad;
