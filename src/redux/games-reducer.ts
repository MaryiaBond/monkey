const GET_TRUE_ANSWER = 'GET_TRUE_ANSWER';
const SET_CURRENT_LEVEL = 'SET_CURRENT_LEVEL';
const SET_CURRENT_SIZE = 'SET_CURRENT_SIZE';

type initialStateType = typeof initialState

let initialState = {
    animalShortNames: ["ленин", "жвачка", "плеер", "кассета", "пенопластик", "кухня", "бумага", "режим", "однослойность", "органомичность", "хелб", "шоколадно", "неизбежно", "кроссовки", "розетка", "угол", "лес", "сотона", "голод", "темнота", "схема", "окно"] as Array<string>,
    currentValue: "" as string,
    currentPoints: 0 as number,
    currentLevel: 1 as number,
    currentSize: 3 as number
}

const gamesReducer = (state = initialState, action: any)  : initialStateType=> {
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
type initializedPointType = {
    type: typeof GET_TRUE_ANSWER
    currentPoints: number
}

export const initializedPoint = (currentPoints: number) : initializedPointType => ({ type: GET_TRUE_ANSWER, currentPoints });



export const initializeGetPoint = (currentPoints: number) => (dispatch: any) => {
    dispatch(initializedPoint(currentPoints))
}

type getCurrentLevelType ={
    type: typeof SET_CURRENT_LEVEL
    currentLevel: number
}
//for catEatBrad Game
export const getCurrentLevel = (currentLevel: number) : getCurrentLevelType => ({ type: SET_CURRENT_LEVEL, currentLevel });

export const setCurrentLevel = (currentLevel: number) => (dispatch: any) => {
    {
        dispatch(getCurrentLevel(currentLevel))
    }
}

type getCurrentSizeType ={
    type: typeof SET_CURRENT_SIZE
    currentSize: number
}

export const getCurrentSize = (currentSize: number) : getCurrentSizeType => ({ type: SET_CURRENT_SIZE, currentSize });

export const setCurrentSize = (currentSize: number) => (dispatch: any) => {
    {
        dispatch(getCurrentSize(currentSize))
    }
}
export default gamesReducer;
