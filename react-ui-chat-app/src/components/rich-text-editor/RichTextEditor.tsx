import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  console.log(editorState);
  return (
      <>
        <Editor editorState={editorState} onChange={setEditorState}/>
        <pre>{JSON.stringify(editorState.getCurrentContent(), null, 2)}</pre>
      </>
  );
}

export default RichTextEditor;
