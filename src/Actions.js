import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

/* ADD COMMENT */
export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}

/* const boundAddComment = text => dispatch(addComment(text)); */

/* REMOVE COMMENT */
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

/* const boundRemoveComment = id => dispatch(removeComment(id)); */

/* EDIT COMMENT */
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}
/* const boundEditComment = (text, id) => dispatch(editComment(text, id)); */

/* THUMB UP COMMENT */
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

/* const boundThumbUpComment = id => dispatch(thumbUpComment(id)); */

/* THUMB DOWN COMMENT */
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}

/* const boundThumbDownComment = id => dispatch(thumbDownComment(id)); */
