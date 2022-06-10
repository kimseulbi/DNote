import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeNoteInput,
  postCreators,
  toggleNote,
} from "../store/modules/notes";
import InsertForm from "../components/notes/InsertForm";
import NoteWrapper from "../components/notes/NoteWrapper";
import NoteList from "../components/notes/NoteList";

const NoteContainer = () => {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook입니다.
  const { noteInput, error, notes, editing } = useSelector((state) => ({
    noteInput: state.notes.noteInput,
    error: state.notes.error,
    notes: state.notes.notes,
    editing: state.notes.editing,
  }));

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook 입니다.
  const dispatch = useDispatch();

  const handleChange = (value, isEditing) => {
    dispatch(changeNoteInput(value, isEditing));
  };

  const handleAddNote = () => {
    dispatch(postCreators.addPostMiddleware());
  };

  const handleToggle = (id, text) => {
    if (editing.id === id) {
      dispatch(toggleNote(null, ""));
    } else {
      dispatch(toggleNote(id, text));
    }
  };

  const updateNote = () => {
    dispatch(postCreators.updateNoteMiddleware());
  };

  const deleteNote = (id) => {
    dispatch(postCreators.deletedNoteMiddleware(id));
  };

  useEffect(() => {
    dispatch(postCreators.getPostMiddleware());
  }, []);

  return (
    <div>
      <NoteWrapper>
        <InsertForm
          noteInput={noteInput}
          onChangeInput={handleChange}
          onAdd={handleAddNote}
          error={error}
        />
        <NoteList
          notes={notes}
          editing={editing}
          onToggle={handleToggle}
          onChange={handleChange}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      </NoteWrapper>
    </div>
  );
};

export default NoteContainer;
