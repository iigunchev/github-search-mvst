import useRepoQuery from '../../../hooks/useRepoQuery';
import { RepoOverview } from '../../../interfaces/interfaces';
import Repo from '../Repo/Repo';

const RepoList = ({ username }: { username: string }) => {
  const { repos, queryState } = useRepoQuery(username);

  return (
    <>
      {queryState === 'loading' && <p className="mt-8">Loading...</p>}
      {queryState === 'error' && <p className="mt-8">Error</p>}
      <ul className="w-full bg-white p-4">
        {repos &&
          repos.map((repo: RepoOverview, index: any) => (
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
