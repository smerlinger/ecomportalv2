import { BrandBubbleProps } from '@/components/molecules/BrandBubble';
import hhLogo from '../../public/logo/hh.png';
import prLogo from '../../public/logo/pr.png';
import kkLogo from '../../public/logo/kk.png';
import bbLogo from '../../public/logo/bb.png';
import qqLogo from '../../public/logo/qq.png';
import toLogo from '../../public/logo/to.png';
import ggLogo from '../../public/logo/gg.png';
import rrLogo from '../../public/logo/rr.png';

export const BrandBubbleList: BrandBubbleProps[] = [
  {
    image: hhLogo,
    style: 'absolute right-8 top-8 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: prLogo,
    style: 'absolute -top-4 right-96 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: kkLogo,
    style: 'absolute bottom-20 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: bbLogo,
    style: 'absolute -bottom-4 left-60 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: qqLogo,
    style: 'absolute left-80 top-8 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: toLogo,
    style: 'absolute -top-6 left-16 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: ggLogo,
    style: 'absolute right-32 top-72 z-0 hidden w-16 md:w-20 lg:flex',
  },
  {
    image: rrLogo,
    style: 'absolute bottom-20 right-96 z-0 hidden w-16 md:w-20 lg:flex',
  },
];
