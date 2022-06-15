import { useState } from 'react';
import { useRouter } from 'next/router';
import searchUsers from '../../../services/searchUser';
import Image from 'next/image';
import searchIcon from '../../assets/searchIcon.svg';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queryState, setQueryState] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryState('');
    if (searchQuery.length < 3) return;
    try {
      setQueryState('loading');
      const result = await searchUsers(searchQuery);
      if (result === 'User not found') {
        setQueryState('error');
        return;
      }
      // Redirect to user page
      router.push(`/users/${searchQuery}`);
    } catch (error: any) {
      setQueryState('error');
    }
  };

  // search query and debounced function
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="search"
          className="flex flex-col justify-center gap-4 relative sm:flex-row"
        >
          <input
            role="search"
            className="w-full max-w-lg px-4 py-2 border border-slate-300 rounded-full focus:border-slate-500 outline-none"
            type="search"
            id="search"
            placeholder="Type in a GitHub username"
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={queryState === 'loading'}
            className="bg-zinc-900 text-white flex justify-center gap-2 px-4 py-2 rounded-full w-max-content hover:bg-zinc-700 max-w-lg"
          >
            {queryState === 'loading' ? (
              <span>Loading</span>
            ) : (
              <>
                <Image
                  src={searchIcon}
                  alt="search"
                  className="searchBtnImage"
                  width={24}
                  height={24}
                />
                <span>Search</span>
              </>
            )}
          </button>
        </label>
      </form>
      <div className="mt-4 text-center italic text-md text-slate-500">
        {queryState === 'error' && <span>User: Not Found</span>}
      </div>
    </div>
  );
};

export default SearchBar;
