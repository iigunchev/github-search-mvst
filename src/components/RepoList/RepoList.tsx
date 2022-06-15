import useRepoQuery from '../../../hooks/useRepoQuery';
import { RepoOverview } from '../../../interfaces/interfaces';
import Repo from '../Repo/Repo';

const RepoList = ({ username }: { username: string }) => {
  const { repos, queryState } = useRepoQuery(username);
  return (
    <div className="my-4 sm:my-0">
      <ul className="w-full bg-white">
        {queryState === 'loading' && <p className="mt-8">Loading...</p>}
        {queryState === 'error' && <p className="mt-8">Error</p>}
        {repos.length > 0 &&
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
    </div>
  );
};

export default RepoList;
