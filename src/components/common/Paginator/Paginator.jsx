import React, {useState} from "react";
import classes from './Paginator.module.css';

let Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged}) => {
    let pageCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let [currentLeftPage, setCurrentLeftPage] = useState(1);
    let [currentRightPage, setCurrentRightPage] = useState(pageSize)
    let lastPage = currentRightPage + pageSize < pageCount
    let goToNext = () => {
        setCurrentRightPage(currentRightPage + pageSize);
        setCurrentLeftPage(currentLeftPage + pageSize)
    }
    let goToPrev = () => {
        setCurrentRightPage(currentRightPage - pageSize);
        setCurrentLeftPage(currentLeftPage - pageSize)
    }
    //some logic to toggle array of numbers
    return (
            <div className={classes.pagination}>
                {currentLeftPage > 1 && <div onClick={goToPrev}>Prev</div>}
                <div>{pages.filter(p=> p<= currentRightPage && p >= currentLeftPage).map(p => {
                    return <span className={currentPage === p && classes.currentPage}
                                 onClick={(e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}</div>
                {lastPage && <div onClick={goToNext}>Next</div>}
            </div>

    )
}

export default Paginator


