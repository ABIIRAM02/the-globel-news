import React from 'react'
import Article from './Article'

type Props = {
    news : NewsResponse
}

const NewsList = ({news}:Props) => {
  return (
    news ? <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  p-10 gap-10' >
        {
            news?.data?.map( article => <Article key={article.title} article={article} /> )
        }
    </main> :
     <h2 className="animate-pulse font-serif text-lg text-gray-400 text-center p-10">
     Monthly Fetching Quota has been ended!
   </h2>
  )
}

export default NewsList