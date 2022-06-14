import { useState, useEffect } from 'react';
import getUserRepos from '../services/getUserRepos';
import { RepoOverview } from '../interfaces/interfaces';

const useRepoQuery = (username: string) => {
  const [repos, setRepos] = useState<RepoOverview[]>([]);
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

  return { repos, queryState };
};

export default useRepoQuery;
