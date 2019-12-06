
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

import React from "react";
let state = {
    myPosts: [
        { message: 'Hi, were are you from?', id: 1, like: 15, dislike: 12 },
        { message: 'Did you hear about 1-ARspacePlanet?', id: 2, like: 21, dislike: 12 }
    ]
}
it('new post should be added', () => {
    //1/ test data
    let action = addPostActionCreator("this app is working")

    //2 action
    let newState = profileReducer(state, action)

    // 3 expectation

    expect(newState.myPosts.length).toBe(9);

});
it('new post should be deleted', () => {
    //1/ test data
    let action = deletePost(2)

    //2 action
    let newState = profileReducer(state, action)

    // 3 expectation

    expect(newState.myPosts.length).toBe(1);
//jest
});

