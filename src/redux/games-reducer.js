const GET_TRUE_ANSWER = 'GET_TRUE_ANSWER';
const SET_CURRENT_LEVEL = 'SET_CURRENT_LEVEL';
const SET_CURRENT_SIZE = 'SET_CURRENT_SIZE';
let initialState = {
    animalShortNames: ["ленин", "жвачка", "плеер", "кассета", "пенопластик", "кухня", "бумага", "режим", "однослойность", "органомичность", "хелб", "шоколадно", "неизбежно", "кроссовки", "розетка", "угол", "лес", "сотона", "голод", "темнота", "схема", "окно"],
    currentValue: "",
    currentPoints: 0,
    currentLevel: 1,
    currentSize: 3

}
const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRUE_ANSWER:
            return {
                ...state,
                currentPoints: action.currentPoints
            }
        case SET_CURRENT_LEVEL:
            return {
                ...state,
                currentLevel: action.currentLevel + 1
            }

        case SET_CURRENT_SIZE:
            return {
                ...state,
                currentSize: action.currentSize + 1
            }
        default:
            return state;
    }

}

//for animalSpace Game
export const initializedPoint = (currentPoints) => ({ type: GET_TRUE_ANSWER, currentPoints });

export const initializeGetPoint = (currentPoints) => (dispatch) => {
    dispatch(initializedPoint(currentPoints))
}

//for catEatBrad Game
export const getCurrentLevel = (currentLevel) => ({ type: SET_CURRENT_LEVEL, currentLevel });

export const setCurrentLevel = (currentLevel) => (dispatch) => {
    {
        dispatch(getCurrentLevel(currentLevel))
    }
}

export const getCurrentSize = (currentSize) => ({ type: SET_CURRENT_SIZE, currentSize });

export const setCurrentSize = (currentSize) => (dispatch) => {
    {
        dispatch(getCurrentSize(currentSize))
    }
}
export default gamesReducer;