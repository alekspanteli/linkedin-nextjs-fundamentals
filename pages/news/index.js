export default function News() {
  return <h1 className="text-lg text-blue-700 font-bold">Top Stories</h1>;
}

export async function getStaticProps() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return {
    props: {}, // will be passed to the page component as props
  };
}
