const searchUser = async (name: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`, {
      headers: {
        Authorization: `${process.env.GITHUB_ACCESS_TOKEN}`
      }
    });
    if (response.status === 404) {
      throw new Error('User not found');
    }
    const data = await response.json();
    return data;
  } catch (err: any) {
    return err.message;
  }
};
export default searchUser;
