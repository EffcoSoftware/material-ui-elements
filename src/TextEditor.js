import React from 'react'
import ReactQuill from 'react-quill'

const TextEditor = ({
  value,
  input,
  style,
  readOnly,
  theme,
  placeholder,
  defaultValue
}) => (
  <ReactQuill
    onChange={input && input.onChange}
    value={input ? input.value : value}
    style={style}
    readOnly={readOnly}
    theme={theme}
    placeholder={placeholder}
    defaultValue={defaultValue}
  />
)

export default TextEditor
