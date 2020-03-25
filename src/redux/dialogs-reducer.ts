const LISTEN_NEW_MESS = 'LISTEN-NEW-MESS';
const ADD_MESS = 'ADD-MESS';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dataMess: [
        { id: 1, message: 'Hi, how are you' },
        { id: 2, message: 'I`m fine' },
        { id: 3, message: 'What will you do tomorrow?' },
        { id: 4, message: 'I don`t know =)))' },
    ] as Array<MessageType>,
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
    ] as Array<DialogType>,
    listenMessage: 'ui'
}

export type InitialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any) : InitialStateType => {
    switch (action.type) {
        case ADD_MESS:
            return {
                    ...state,
                    listenMessage: '',
                    dataMess: [...state.dataMess, {id: 10, message: action.newMess}]
                }
        default:
            return state;
    }
}

type addMessageActionType = {
    type: typeof ADD_MESS
    newMess: string
}

export const addMessActionCreator = (newMess: string) : addMessageActionType => ({ type: ADD_MESS, newMess });
export default dialogReducer;
