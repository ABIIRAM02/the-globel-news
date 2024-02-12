import LiveTimeStamp from "@/components/LiveTimeStamp";
import { notFound } from "next/navigation";

type Props = {
  searchParams?: Article;
};

const ArticleInfo = ({ searchParams }: Props) => {
  // if (
  //   (searchParams && Object.entries(searchParams).length === 0) ||
  //   !searchParams
  // ) {
  //   return notFound();
  // }

  // console.log(searchParams);

  const article : Article = searchParams;
  
  return (
    <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10" >
      {article.image && (
        <img
          className="h-52 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          src={article.image}
          alt={article.title}
        />
      )}

      <section className="px-10" >

        <h1 className="headerTitle px-0 no-underline pb-2" >{article.title}</h1>
        
        <div className="flex divide-x-2 space-x-4" >
            <h1 className="font-bold" >By : {article.author || 'unKnown'}</h1>
            <h1 className="font-bold pl-4" >Source : {article.source}</h1>
            <p className="pl-4" > <LiveTimeStamp time={article.published_at} /></p>
        </div>

        <p className="pt-4" >{article.description}</p>
      </section>

    </section>
  );
};

export default ArticleInfo;
