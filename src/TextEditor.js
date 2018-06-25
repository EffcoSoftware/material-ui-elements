import React from 'react'
import ReactQuill from 'react-quill';

const TextEditor = ({ input, style, readOnly, theme, placeholder, defaultValue }) => (
      <ReactQuill
        onChange={input.onChange}
        value={input.value}
        style={style} 
        readOnly={readOnly} 
        theme={theme} 
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    )

export default TextEditor