import routes from 'containers/App/routes';
import { APP_DOMAIN, NODE_ENV } from 'config';

const items = ({ screen }) => [
  {
    label: 'Home',
    route: routes.HOME,
    isShow: true,
  },
  {
    label: 'Cids',
    route: routes.CIDS,
    isShow: true,
  },
  {
    label: 'Transactions',
    route: routes.TRANSACTIONS,
    isShow: true,
  },
  {
    label: NODE_ENV === 'production' ? 'Testnet' : 'Mainnet',
    isShow: screen.isMobile,
  },
  {
    label: 'Cryptizen',
    link: APP_DOMAIN,
    isShow: true,
  },
];

export default items;
