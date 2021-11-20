import { signIn, signOut, useSession } from 'next-auth/client';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './style.module.scss';

export function SignInButton() {
  const [session] = useSession();
  console.log(`session`, session);
  return session ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX
        onClick={() => signOut()}
        className={styles.closeIcon}
        color="#737380"
      />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
