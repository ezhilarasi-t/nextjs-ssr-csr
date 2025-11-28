// This is a Server Component by default in Next.js App Router
// It demonstrates Server Side Rendering (SSR) by fetching data on the server before rendering the page.

export default async function SSRPage() {
  try {
    // Fetch data from the JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Check if the response is ok (status in the range 200-299)
    if (!res.ok) throw new Error('Network response was not ok');

    // Parse the JSON response to get the posts data
    const posts = await res.json();

    // Render the posts data on the server and send the HTML to the client
    return (
      <div>
        <h1>Server Side Rendering (SSR) with Fetch</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Server Side Rendering (SSR) with Fetch</h1>
        <p>Failed to load posts.</p>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }
}
