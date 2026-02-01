import { useState } from 'react';
import { fetchGitHubUser } from '../services/githubService';

function SearchUser() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const data = await fetchGitHubUser(username);
    setUserData(data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div style={{ marginTop: '20px' }}>
          <img src={userData.avatar_url} alt={userData.login} width="100" />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
