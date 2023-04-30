import  {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"


export const articleApi = createApi({
    reducerPath : "articleApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://article-extractor-and-summarizer.p.rapidapi.com/",
        prepareHeaders : (headers) => {
            headers.set("content-type",'application/json');
            headers.set("X-RapidAPI-Key", import.meta.env.VITE_RAPID_API_ARTICLE_KEY);
            headers.set("X-RapidAPI-Host",import.meta.env.VITE_RAPID_API_ARTICLE_HOST);
        
            return headers;
        }
    
    }
    ),
    endpoints: (builder) => ({
        getSummary : builder.query({
            query : (params) => `/summarize?url=${encodeURIComponent(params.article.url)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;