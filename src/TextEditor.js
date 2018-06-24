import React from 'react'
import ReactQuill from 'react-quill';

const TextEditor = ({ input, style }) => (
      <ReactQuill {...input} onChange={input.onChange} style={style}/>
    )

export default TextEditor