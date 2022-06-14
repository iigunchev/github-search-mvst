import { Data } from '../../../pages/users/[user]';

const UserInfo = ({ avatar_url, name, login, bio }: Data) => {
  return (
    <section className="w-full sm:max-w-[250px] bg-orange-50 p-4 sm:bg-white">
      <div className="flex gap-4 sm:block">
        <div className="max-w-[100px] sm:max-w-[250px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full"
            src={avatar_url}
            width={300}
            height={300}
            alt={`${login} profile image`}
          />
        </div>
        <div>
          <h3 className="text-2xl font-bold">{name}</h3>
          <span className="block text-slate-700 mt-0 sm:mt-2">{login}</span>
        </div>
      </div>
      <p className="mt-4">{bio}</p>
    </section>
  );
};

export default UserInfo;
