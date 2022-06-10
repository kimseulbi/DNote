import axios from "axios";

// 액션 타입 정의
const CHANGE_NOTE_INPUT = "notes/CHANGE_NOTE_INPUT";

const ADD_NOTE = "notes/ADD_NOTE";
const ADD_NOTE_SUCCESS = "notes/ADD_NOTE_SUCCESS";
const ADD_NOTE_FAILURE = "notes/ADD_NOTE_FAILURE";

const GET_NOTES = "notes/GET_NOTES";
const GET_NOTES_SUCCESS = "notes/GET_NOTES_SUCCESS";
const GET_NOTES_FAILURE = "notes/GET_NOTES_FAILURE";

const TOGGLE_NOTE = "notes/TOGGLE_NOTE";

const UPDATE_NOTE = "notes/UPDATE_NOTE";
const UPDATE_NOTE_SUCCESS = "notes/UPDATE_NOTE_SUCCESS";
const UPDATE_NOTE_FAILURE = "notes/UPDATE_NOTE_FAILURE";

const DELETE_NOTE = "notes/DELETE_NOTE";
const DELETE_NOTE_SUCCESS = "notes/DELETE_NOTE_SUCCESS";
const DELETE_NOTE_FAILURE = "notes/DELETE_NOTE_FAILURE";

// 액션 생성 함수
export const changeNoteInput = (value, isEditing) => ({
  type: CHANGE_NOTE_INPUT,
  payload: { value, isEditing },
});

// export const addNote = () => ({
//   type: ADD_NOTE,
// });

export const addNoteSuccess = (note) => ({
  type: ADD_NOTE_SUCCESS,
  payload: {
    note,
  },
});

export const addNoteFailure = (error) => ({
  type: ADD_NOTE_FAILURE,
  payload: {
    error,
  },
});

// export const getNotes = () => ({
//   type: GET_NOTES,
// });

export const getNotesSuccess = (notes) => ({
  type: GET_NOTES_SUCCESS,
  payload: {
    notes,
  },
});

export const getNotesFailure = (error) => ({
  type: GET_NOTES_FAILURE,
  payload: {
    error,
  },
});

export const toggleNote = (id, text) => ({
  type: TOGGLE_NOTE,
  payload: {
    id,
    text,
  },
});

// export const updateNote = () => ({
//   type: UPDATE_NOTE,
// });

export const updateNoteSuccess = (note) => ({
  type: UPDATE_NOTE_SUCCESS,
  payload: {
    note,
  },
});

export const updateNoteFailure = (error) => ({
  type: UPDATE_NOTE_FAILURE,
  payload: {
    error,
  },
});

// export const deleteNote = (id) => ({
//   type: DELETE_NOTE,
//   payload: {
//     id,
//   },
// });

export const deleteNoteSuccess = (id) => ({
  type: DELETE_NOTE_SUCCESS,
  payload: {
    id,
  },
});

export const deleteNoteFailure = (error) => ({
  type: DELETE_NOTE_FAILURE,
  payload: {
    error,
  },
});

// 미들웨어
const addPostMiddleware = () => async (dispatch, getState) => {
  // 이 안에서는 액션을 dispatch 할 수도 있고
  // getState를 사용하여 현재 상태도 조회 할 수 있습니다.
  dispatch({ type: ADD_NOTE });
  const note = getState().notes.noteInput;
  await axios({
    method: "POST",
    url: "/api/notes/",
    data: {
      text: note,
    },
  })
    .then((res) => {
      const note = res.data;
      dispatch(addNoteSuccess(note));
    })
    .catch((error) => {
      dispatch(addNoteFailure(error));
    });
};

const getPostMiddleware = () => async (dispatch) => {
  //요청이 시작했음을 알리는 액션
  dispatch({ type: GET_NOTES });
  await axios({
    method: "GET",
    url: "/api/notes/",
  })
    .then((res) => {
      const notes = res.data;
      dispatch(getNotesSuccess(notes));
    })
    .catch((error) => {
      dispatch(addNoteFailure(error));
    });
};

const deletedNoteMiddleware = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NOTE });
  await axios({
    method: "DELETE",
    url: `/api/notes/${id}/`,
  })
    .then((res) => {
      dispatch(deleteNoteSuccess(id));
    })
    .catch((error) => {
      dispatch(deleteNoteFailure(error));
    });
};

const updateNoteMiddleware = () => async (dispatch, getState) => {
  dispatch({ type: UPDATE_NOTE });
  const id = getState().notes.editing.id;
  const text = getState().notes.editing.text;
  await axios({
    method: "PATCH",
    url: `/api/notes/${id}/`,
    data: {
      text: text,
    },
  })
    .then((res) => {
      const note = res.data;
      dispatch(updateNoteSuccess(note));
    })
    .catch((error) => {
      dispatch(updateNoteFailure(error));
    });
};

// 초기상태 정의
const initialState = {
  noteInput: "",
  notes: [],
  // 에러 관련 state 등록
  error: {
    triggered: false,
    message: "",
  },
  editing: {
    id: null,
    text: "",
  },
};

// 리듀서
export const notes = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTE_INPUT:
      if (action.payload.isEditing) {
        return {
          ...state,
          editing: {
            ...state.editing,
            text: action.payload.value,
          },
        };
      }
      return {
        ...state,
        noteInput: action.payload.value,
      };
    case ADD_NOTE_SUCCESS:
      const { note } = action.payload;
      return {
        ...state,
        notes: [note].concat(state.notes),
        noteInput: "",
        // 성공시 에러 초기화
        error: {
          triggered: false,
          message: "",
        },
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        error: {
          triggered: true,
          message: "Error! Please Try With Unempty Note",
        },
      };
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload.notes,
      };
    case GET_NOTES_FAILURE:
      return {
        ...state,
        error: {
          triggered: true,
          message: "Error! Please Try Again!",
        },
      };
    case TOGGLE_NOTE:
      return {
        ...state,
        editing: {
          id: parseInt(action.payload.id, 10),
          text: action.payload.text,
        },
      };
    case UPDATE_NOTE_SUCCESS:
      const { id, text } = action.payload.note;
      let notes = state.notes;
      let index = notes.findIndex((note, i) => {
        return note.id === id;
      });
      notes[parseInt(index, 10)] = {
        id,
        text,
      };
      return {
        ...state,
        editing: {
          id: null,
          note: "",
        },
        notes,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export const postCreators = {
  addPostMiddleware,
  getPostMiddleware,
  deletedNoteMiddleware,
  updateNoteMiddleware,
};
