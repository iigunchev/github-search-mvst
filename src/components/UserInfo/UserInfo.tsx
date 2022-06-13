import Image from 'next/image';
import { Data } from '../../../pages/users/[user]';

const UserInfo = ({ avatar_url, name, login, bio }: Data) => {
  return (
    <section>
      <div>
        <Image src={avatar_url} width={200} height={200} alt={`${login} profile image`}/>
      </div>
      <div>
        <h3>{name}</h3>
        <span>{login}</span>
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default UserInfo;
