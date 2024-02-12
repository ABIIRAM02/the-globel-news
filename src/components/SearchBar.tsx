'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SearchBar = () => {

  const [input ,setInput] = useState <string> ('')
  const router = useRouter()

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push(`/search?term=${input}`)
  }

  return (
    <main>
        <form 
        onSubmit={handleSubmit}
        className='max-w-6xl mx-auto flex justify-between items-center px-5'
        >
          <input 
          type="text"
          onChange={(e)=>{setInput(e.target.value)}} 
          placeholder='Search Keywords'
          className='w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400'
          />
          <button
          type='submit'
          disabled={!input}
          className='text-orange-400 disabled:text-gray-400'
          >Search</button>
        </form>
    </main>
  )
}

export default SearchBar