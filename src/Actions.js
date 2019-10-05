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

/* REMOVE COMMENT */
export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

/* EDIT COMMENT */
export function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

/* THUMB UP COMMENT */
export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
}

/* THUMB DOWN COMMENT */
export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}
