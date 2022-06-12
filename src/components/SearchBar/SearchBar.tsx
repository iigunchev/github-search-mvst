import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import searchUsers from '../../../services/searchUsers';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchError, setSearchError] = useState<string | null>(null);

  const router = useRouter();

  // search query and debounced function
  const updateQuery = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(e.target.value);
  const debouncedOnChange = debounce(updateQuery, 500);

  // fetch search results on query change
  useEffect(() => {
    if (searchQuery.length < 3) return;
    (async () => {
      try {
        const result = await searchUsers(searchQuery);
        // guard against empty response
        if (result.message === 'Not Found') {
          setSearchError('No results found');
          return;
        }
        // Redirect to user page
        router.push(`/users/${searchQuery}`);
      } catch (error: any) {
        console.log(error.message);
      }
    })();
  }, [searchQuery, router]);

  return (
    <section className="min-w-full mt-8">
      <label htmlFor="search" className="flex justify-center">
        <input
          className="w-full max-w-lg px-4 py-2 border border-slate-300 rounded-full focus:border-slate-500 outline-none"
          type="search"
          id="search"
          placeholder="Type a GitHub username here..."
          onChange={debouncedOnChange}
        />
      </label>
      {searchError && <div className="mt-4">User: {searchError}</div>}
    </section>
  );
};

type ErrorMessage = {
  message: string;
};

export default SearchBar;
