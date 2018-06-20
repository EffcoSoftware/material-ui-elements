import React from 'react'
import ReactQuill from 'react-quill';

const TextEditor = ({ input }) => (
      <ReactQuill onChange={input.onChange} value={input.value} />
    )

export default TextEditor