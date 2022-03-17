import IpfsImage from 'assets/images/Ipfs.png';
import routes from 'containers/App/routes';
import { BiTransferAlt } from 'react-icons/bi';

const totals = [
  {
    label: 'totalCids',
    image: IpfsImage,
    route: routes.CIDS,
  },
  {
    label: 'totalNftCid',
    text: 'NFT',
  },
  {
    label: 'totalTransaction',
    icon: BiTransferAlt,
    route: routes.TRANSACTIONS,
  },
  {
    label: 'totalNftGame',
    text: 'NFT',
  },
];

export default totals;
