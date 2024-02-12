
type Article ={
    author : string | null,
    category : string,
    country : string,
    description : string,
    image : string | null,
    language : string , 
    published_at :string,
    source :string,
    title :string,
    url :string
}

type Pagination = Article & {
    count : number,
    limit : number,
    offset : number, 
    totla : number
}

interface NewsResponse {
    pagination : Pagination,
    data : Article[]
}



type Category = 
     | "general"
     | "business"
     | "entertainment"
     | "health "
     | "science"
     | "sports"
     | "technology"
