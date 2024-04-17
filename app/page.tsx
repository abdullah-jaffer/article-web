
export default async function ArticleScreen() {
  const articlesList = await fetch(`https://ttk3k6u951.execute-api.us-east-1.amazonaws.com/Prod/articles`, {
    next: { revalidate: 10 },
  })
  const articles = await articlesList.json();

    return (
      <div className=" bg-blue-50">
        <div className="p-10 text-center bg-black text-slate-100 text-9xl">
           <h1 className="text-9xl">Hi, my name is Abdullah</h1>
           <h2 className="text-6xl mt-10">Read my thoughts below</h2>
        </div>
        <div>
        <h2 className="pl-10 text-6xl mt-8">My old Work</h2>
        <div className="p-10 flex flex-wrap -mx-4 ">
        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src="https://source.unsplash.com/Lki74Jj7H-U/400x300" alt="Card img" className="object-cover object-center w-full h-48" />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                       
                        <a href="#"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            What Zombies Can Teach You About Food
                        </a>
                    
                    </div>
                    <div>
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More -></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src="https://source.unsplash.com/L9_6GOv40_E/400x300"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                       
                        <a href="#"
                            className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            Old School Art
                        </a>
                      
                    </div>
                    <div>
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More -></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                       
                        <a href="#"
                            className="w-full block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            5 Things To Do About Rain
                        </a>
                      
                    </div>
                    <div>
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More -></a>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
            alt="Card img"
            className="object-cover object-center w-full h-48"
          />
            <div className="flex flex-grow">
                <div className="triangle"></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                       
                        <a href="#"
                            className="w-full block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            5 Things To Do About Rain
                        </a>
                      
                    </div>
                    <div>
                        <a href="#"
                            className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More -></a>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        </div>
        <div>
        <h2 className="pl-10 text-6xl mt-8">My New Work</h2>
        <div className="p-10 flex flex-wrap -mx-4 ">
        {articles.map((article) => 
         <div className="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
         <img src={article.articleImageLink} alt="Card img" className="object-cover object-center w-full h-48" />
         <div className="flex flex-grow">
             <div className="triangle"></div>
             <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                 <div>
                    
                     <a href={"/article-screen/" + article.articleId}
                         className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                         {article.articleTitle}
                     </a>
                 
                 </div>
                 <div>
                     <a href={"/article-screen/" + article.articleId}
                         className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                         More -></a>
                 </div>
             </div>
         </div>
     </div>
        )
        }
    </div>
        </div>
    
    </div>
    );
  }