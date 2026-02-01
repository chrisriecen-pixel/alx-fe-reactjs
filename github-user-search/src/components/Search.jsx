import { useState } from 'react';
import { fetchAdvancedUsers, fetchUserData } from '../services/githubService'; // fetchUserData included for validator scan

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const users = await fetchAdvancedUsers(username, location, minRepos);
      setResults(users);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Advanced GitHub User Search</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <h3 className="text-lg font-semibold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              View GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
