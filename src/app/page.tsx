import fetchNews from "@/utils/fetchNews";
import { categories } from "../../constants";
import NewsList from "@/components/NewsList";

export default async function Home() {

  const news : NewsResponse  = await fetchNews(categories.join(","));

  // await new Promise( resolve =>  setTimeout(resolve,3000))
  
  return (
    <section>
      <NewsList news={news} />
    </section>
  );
  
}
