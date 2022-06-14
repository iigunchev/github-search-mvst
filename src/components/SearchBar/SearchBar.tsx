import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import searchUsers from '../../../services/searchUser';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [queryState, setQueryState] = useState('');

  const router = useRouter();

  // search query and debounced function
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);
  const debouncedOnChange = debounce(updateQuery, 500);

  // fetch search results on query change
  useEffect(() => {
    setQueryState('');
    if (searchQuery.length < 3) return;
    (async () => {
      try {
        setQueryState('loading');
        const result = await searchUsers(searchQuery);
        // guard against empty response
        if (result.message === 'Not Found') {
          setQueryState('error');
          return;
        }
        // Redirect to user page
        router.push(`/users/${searchQuery}`);
      } catch (error: any) {
        setQueryState('server error');
      } finally {
        setQueryState('');
      }
    })();
  }, [searchQuery, router]);

  return (
    <section className="min-w-full mt-8">
      <label htmlFor="search" className="flex justify-center">
        <input
          role="search"
          className="w-full max-w-lg px-4 py-2 border border-slate-300 rounded-full focus:border-slate-500 outline-none"
          type="search"
          id="search"
          placeholder="Type a GitHub username here..."
          onChange={debouncedOnChange}
        />
      </label>

      <div className="mt-4 text-center italic text-md text-slate-500">
        {queryState === 'error' && <span>User: Not Found</span>}
        {queryState === 'loading' && <span>Loading</span>}
      </div>
    </section>
  );
};

export default SearchBar;
