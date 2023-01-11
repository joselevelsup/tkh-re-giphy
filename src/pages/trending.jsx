import { useLoaderData, Link } from "react-router-dom";

export default function TrendingPage() {
  const giphyData = useLoaderData();
  console.log(giphyData);

  return (
    <div className="trending-page">
      {giphyData ? (
        <ul>
          {giphyData.data.map((giphy) => (
            <li key={giphy.id}>
              <Link to={`/gif/${giphy.id}`}>{giphy.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>This is the trending page</div>
      )}
    </div>
  );
}
