import Image from 'next/image';
import logo from '../../../../public/logo/ll.png';
import { useRouter } from 'next/navigation';

export const LogoImage = () => {
  const router = useRouter();

  return (
    <Image
      alt="home-screen-logo"
      onClick={() => router.push('/')}
      src={logo}
      style={{
        height: '3.5em',
        width: 'auto',
      }}
    />
  );
};
