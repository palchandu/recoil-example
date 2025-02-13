'use client'
import React from 'react'
import { useRecoilState } from 'recoil'
import { textState } from '@/state/state'

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    function handleText(e) {
        setText(e.target.value)
    }
  return (
      <div>
          <label htmlFor='text'>Text Input</label>
          <input className=' border-x-2 border-black  ' type='text' name='text' value={text} onChange={handleText} />
          <br />
          Text Output: {text}
    </div>
  )
}

export default TextInput