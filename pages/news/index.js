export default function News({ posts }) {
  return (
    <>
      <h1 className="text-lg text-blue-700 font-bold">Top Stories</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  console.log(posts);

  return {
    props: {
      posts,
    },
  };
}
