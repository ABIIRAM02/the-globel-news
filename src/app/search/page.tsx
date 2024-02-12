import NewsList from "@/components/NewsList"
import fetchNews from "@/utils/fetchNews"

type Props = {
    searchParams : {term : string}
} 

 async function SearchPage({searchParams : {term}} : Props ) {

  console.log(term);
  
    const news : NewsResponse = await fetchNews(
        "general",
        term,
        true
    )

  return (
    <div>
        <h1 className="headerTitle" >Search Results for : {term}</h1>

        <NewsList news={news} />
    </div>
  )
}

export default SearchPage
