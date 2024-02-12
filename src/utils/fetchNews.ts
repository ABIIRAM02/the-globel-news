import { gql } from "graphql-request";
import sortNewsByImage from "./sortByNameByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery(
        $access_key :String!
        $categories :String
        $keywords :String
    ){
        myQuery(
            access_key: $access_key
            categories: $categories
            keywords: $keywords
            ) {
           data {
             author
             category
             country
             description
             image
             language
             published_at
             source
             title
             url
           }
           pagination {
             count
             limit
             offset
             total
           }
         }
    }`;
    
    const res = await fetch('https://ujjain.stepzen.net/api/news-app-api/__graphql' , {
        method:'POST',
        cache: isDynamic ? 'no-cache' : 'default',
        next : isDynamic ? { revalidate:0 } : {revalidate : 20},
        headers:{
            'Content-Type' : 'application/json',
            Authorization:`apikey ${process.env.STEPZEN_API_KEY}`
        },
        body : JSON.stringify({
            query,
            variables:{
                access_key : process.env.MEDIASTACK_API_KEY,
                categories : category,
                keywords : keywords,
            }
        })
    })
    
    console.log(
        "LOADING NEW DATA FROM API FOR CATEGORY  >>> ",
        category,
    );
    
    // try {
        const newsResponse = await res.json();
  
      
        const news = sortNewsByImage(newsResponse.data.myQuery);
        return news;

      // } catch (error:any) {
      //   console.error('Error fetching news:', error.message);
      //   throw error;
      // }
      
}

export default fetchNews;
