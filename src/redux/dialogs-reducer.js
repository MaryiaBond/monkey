const LISTEN_NEW_MESS = 'LISTEN-NEW-MESS';
const ADD_MESS = 'ADD-MESS';
let initialState = {
    dataMess: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'I`m fine' },
        { id: 3, message: 'What will you do tomorrow?' },
        { id: 4, message: 'I don`t know =)))' },
    ],
    dialogMessageText: [
        { message: '' }
    ],
    dataUser: [
        { id: 1, name: 'Jhon Doe' },
        { id: 2, name: 'Jhon Fish' },
        { id: 3, name: 'Jhon Potato' },
        { id: 4, name: 'Jhon Tomato' },
        { id: 5, name: 'Jhon Corn' },
        { id: 6, name: 'Jhon Carrot' },
    ],
    listenMessage: 'ui'
}
const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESS:
            return {
                    ...state,
                    listenMessage: '',
                    dataMess: [...state.dataMess, {id: 10, message: action.newMess}]
                }
                // stateCopy.listenMessage = {text: ''};



        default:
            return state;
    }

}
export const addMessActionCreator = (newMess) => ({ type: ADD_MESS, newMess });
export default dialogReducer;