import Layout from "../comps/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>TV Shows getInitialProps</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/post/${show.id}`} href={`/post?title=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  // const res = await fetch(
  //   "https://api.tvmaze.com/search/shows?q=game-of-thrones"
  // );
  const data = await res.json();

  console.log(`Show data fetched. Count : ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
