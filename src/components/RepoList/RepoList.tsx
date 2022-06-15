import useRepoQuery from '../../../hooks/useRepoQuery';
import { RepoOverview } from '../../../interfaces/interfaces';
import debounce from 'lodash.debounce';
import Repo from '../Repo/Repo';
import getFilteredRepos from '../../../services/getFilteredRepos';

const RepoList = ({ username }: { username: string }) => {
  const { repos, queryState, setRepos } =
    useRepoQuery(username);
  // search query and debounced function
  const updateFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;
    const filteredRepos = await getFilteredRepos(username, filter);
    setRepos(filteredRepos);
  };
  const debouncedOnChange = debounce(updateFilter, 500);

  return (
    <div className="my-4 sm:my-0 w-full">
      <div className="flex gap-4 w-full">
        <form className="w-full">
          <label>
            <input
              type="search"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:border-slate-500 outline-none"
              placeholder="Find a repo"
              onChange={debouncedOnChange}
            />
          </label>
        </form>
        <button>Clear</button>
      </div>
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
