import { useState, useEffect } from 'react';
import getUserRepos from '../services/getUserRepos';
import { RepoOverview } from '../interfaces/interfaces';

const useRepoQuery = (username: string) => {
  const [repos, setRepos] = useState<RepoOverview[]>([]);
  const [filter, setFilter] = useState('');
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

  return { repos, setRepos, queryState, filter, setFilter };
};

export default useRepoQuery;
