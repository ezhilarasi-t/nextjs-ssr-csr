'use client'; //Mark this file as a client component(required for using client side hooks like useQuery)

import { useQuery } from '@tanstack/react-query'; //import useQuery for data fetching and caching

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts'); //Make GET request to fetch posts
  if (!res.ok) throw new Error('Network response was not ok'); //Handle Http errors
  return await res.json(); //Parse and return JSON response
};

//client side Rendering (CSR) component
export default function CSRPage() {
    //Use React Query's useQuery hook to fetch data
  const { data: posts = [], error, isLoading } = useQuery({
    queryKey: ['posts'], //Unique key for caching and identifying the query
    queryFn: fetchPosts //Function to fetch the data
  });

  //show loading message while data is being fetched
  if (isLoading) return <div>Loading...</div>;
  
  //show error message if fetch fails
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Client Side Rendering (CSR) with React Query</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
