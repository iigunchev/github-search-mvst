import searchUser from '../services/searchUser';

const apiUser = {
  "login": "iigunchev",
  "id": 86871642,
  "node_id": "MDQ6VXNlcjg2ODcxNjQy",
  "avatar_url": "https://avatars.githubusercontent.com/u/86871642?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/iigunchev",
  "html_url": "https://github.com/iigunchev",
  "followers_url": "https://api.github.com/users/iigunchev/followers",
  "following_url": "https://api.github.com/users/iigunchev/following{/other_user}",
  "gists_url": "https://api.github.com/users/iigunchev/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/iigunchev/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/iigunchev/subscriptions",
  "organizations_url": "https://api.github.com/users/iigunchev/orgs",
  "repos_url": "https://api.github.com/users/iigunchev/repos",
  "events_url": "https://api.github.com/users/iigunchev/events{/privacy}",
  "received_events_url": "https://api.github.com/users/iigunchev/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Ivan",
  "company": null,
  "blog": "",
  "location": "Valencia, Spain",
  "email": null,
  "hireable": null,
  "bio": "Front end web developer with a background in video and motion graphics. Passionate about pixel perfect design and glorious micro interactions.",
  "twitter_username": "iigunchev",
  "public_repos": 43,
  "public_gists": 4,
  "followers": 0,
  "following": 0,
  "created_at": "2021-07-03T08:05:46Z",
  "updated_at": "2022-06-03T05:49:02Z"
}


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(apiUser)
  })
);

beforeEach(() => {
  fetch.mockClear();
});

it("returns a user from the GitHub API", async () => {
  const user = await searchUser('https://api.github.com/users/iigunchev');

  expect(user).toEqual(apiUser);
  expect(fetch).toHaveBeenCalledTimes(1);
});