export interface RepoOverview {
  name: string;
  description: string;
  stargazers_count: number | null;
  language: string | null;
  updated_at: string;
}

export interface UserData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
}

export interface SearchOptions {
  placeholder: string;
  query: 'user' | 'repo';
  action?: any;
  data?: RepoOverview[] | null;
}
