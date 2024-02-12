import NewsList from "@/components/NewsList"
import fetchNews from "@/utils/fetchNews"
import React, { useState } from "react"

type Props = {
    searchParams? : {term : string}
} 

 async function SearchPage({searchParams} : Props) {

    const news : NewsResponse = await fetchNews(
        "general",
        searchParams?.term,
        true
    )

  return (
    <div>
        <h1 className="headerTitle" >Search Results for : {searchParams?.term}</h1>

        <NewsList news={news} />
    </div>
  )
}

export default SearchPage