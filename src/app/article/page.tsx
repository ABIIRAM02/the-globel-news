'use client'
import LiveTimeStamp from "@/components/LiveTimeStamp";
import { notFound } from "next/navigation";
import { useSearchParams } from 'next/navigation'

type Props = {
  searchParams?: Article;
};

const ArticleInfo = ({ searchParams }: Props) => {

  const data = useSearchParams()
  const obj = Object.fromEntries(data.entries());
 
 if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  return (
    <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10" >
      {obj.image && (
        <img
          className="h-52 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
          src={obj.image}
          alt={obj.title}
        />
      )}

      <section className="px-10" >

        <h1 className="headerTitle px-0 no-underline pb-2" >{obj.title}</h1>
        
        <div className="flex divide-x-2 space-x-4" >
            <h1 className="font-bold" >By : {obj.author || 'unKnown'}</h1>
            <h1 className="font-bold pl-4" >Source : {obj.source}</h1>
            <p className="pl-4" > <LiveTimeStamp time={obj.published_at} /></p>
        </div>

        <p className="pt-4" >{obj.description}</p>
      </section>

    </section>
  );
};

export default ArticleInfo;
