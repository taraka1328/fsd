import { useEffect, useState } from "react";

export const FetchFunctional = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("Error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Posts Data</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <table border="1" style={{ margin: "auto", borderCollapse: "collapse", width: "60%" }}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Posts</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.id}>
                <td align="center">{d.id}</td>
                <td align="left">{d.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FetchFunctional;
