import { useEffect, useState } from 'react';
import getUserRepos from '../../../services/getUserRepos';
import Repo from '../Repo/Repo';

export interface Repo {
  name: string;
  description: string;
  stargazers_count: number | null;
  language: string | null;
  updated_at: string;
}

const RepoList = ({ username }: { username: string }) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [queryState, setQueryState] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setQueryState('loading');
        const data = await getUserRepos(username);
        setRepos(data);
      } catch (err) {
        setQueryState('error');
      } finally {
        setQueryState('');
      }
    })();
  }, [username]);

  return (
    <>
      {queryState === 'loading' && <p className="mt-8">Loading...</p>}
      {queryState === 'error' && <p className="mt-8">Error</p>}
      <ul className="w-full bg-white p-4">
        {repos &&
          repos.map((repo: Repo, index: any) => (
            <li key={index} className="cursor-pointer">
              <Repo
                key={index}
                name={repo.name}
                description={repo.description}
                language={repo.language}
                stargazers_count={repo.stargazers_count}
                updated_at={repo.updated_at}
              />
            </li>
          ))}
      </ul>
    </>
  );
};

export default RepoList;
