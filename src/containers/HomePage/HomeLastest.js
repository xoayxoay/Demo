import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import IpfsImage from 'assets/images/Ipfs.png';
import LoadingIcon from 'components/LoadingIcon';
import { truncate, capitalize } from 'utils';
import { useEffect } from 'react';
import classNames from 'classnames';
import { useScreen } from 'shared-hooks/useScreen';
import routes from 'containers/App/routes';
import { routeTransform } from 'utils/route';
import BaseButton from 'components/BaseButton';
import { timeDistanceNow } from 'utils/time';
import {
  makeSelectCids,
  makeSelectTransactions,
  makeSelectIsLoadingCids,
  makeSelectIsLoadingTransactions,
} from './selectors';
import { requestCids, requestTransactions } from './actions';

function HomeLastest({
  dispatch,
  cids,
  transactions,
  isLoadingCids,
  isLoadingTransactions,
}) {
  const { t } = useTranslation();
  const screen = useScreen();

  useEffect(() => {
    dispatch(requestCids());
    dispatch(requestTransactions());
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-4 py-10">
      <div className="section-box mb-4">
        <div className="p-4 text-lg font-medium border:(bottom) border-blue-gray-200">
          {t('latestCids')}
        </div>
        <div className="p-4 h-lg overflow-y-auto">
          {isLoadingCids ? (
            <div className="h-full w-full flex items-center justify-center">
              <LoadingIcon />
            </div>
          ) : !cids ? (
            <div>{t('noMatching')}</div>
          ) : (
            cids.map((cid, cidKey) => (
              <div
                key={cidKey}
                className={classNames(
                  '<md:(flex-col items-start) flex items-center border-blue-gray-200',
                  {
                    'mb-4 pb-4 border:(bottom)':
                      cidKey < Object.keys(cids).length - 1,
                  },
                )}
              >
                <div className="flex items-center <md:w-full w-1/2">
                  <div className="rounded-lg w-14 h-14 bg-blue-gray-200 text-lg mr-4 flex items-center justify-center">
                    <img src={IpfsImage} alt="ipfs" className="w-7 h-8" />
                  </div>
                  <div>
                    <Link
                      to={routeTransform(routes.CID, [cid?.cid])}
                      className="text-primary hover:underline mb-1"
                    >
                      {truncate(
                        cid?.cid,
                        screen.isMobile ? 26 : screen.isLargeDesktop ? 22 : 18,
                      )}
                    </Link>
                    <div className="text-gray-400 text-sm">
                      {timeDistanceNow(cid?.createdAt)}
                    </div>
                  </div>
                </div>
                <div className="<md:(mt-2 ml-18)">
                  <div className="mb-1">
                    <span>{t('createdBy')}</span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <span>Type:</span>
                    <span className="text-primary hover:underline ml-1">
                      {capitalize(cid?.type)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-2 border:(top) border-blue-gray-200">
          <Link to={routes.CIDS}>
            <BaseButton className="rounded-lg py-2 w-full" type="button">
              {t('viewAll')}
            </BaseButton>
          </Link>
        </div>
      </div>

      <div className="section-box mb-4">
        <div className="p-4 text-lg font-medium border:(bottom) border-blue-gray-200">
          {t('latestTransactions')}
        </div>
        <div className="p-4 h-lg overflow-y-auto">
          {isLoadingTransactions ? (
            <div className="h-full w-full flex items-center justify-center">
              <LoadingIcon />
            </div>
          ) : !transactions ? (
            <div>{t('noMatching')}</div>
          ) : (
            transactions.map((transaction, transactionKey) => (
              <div
                key={transactionKey}
                className={classNames(
                  'flex items-center border-blue-gray-200',
                  {
                    'mb-4 pb-4 border:(bottom)':
                      transactionKey < Object.keys(cids).length - 1,
                  },
                )}
              >
                <div className="flex items-center mr-14 w-1/4 md:w-1/2">
                  <div className="rounded-lg w-12 h-12 bg-blue-gray-200 text-lg mr-4 flex items-center justify-center">
                    TXS
                  </div>
                  <div>
                    <div className="text-primary hover:underline mb-1">
                      {truncate(transaction?.hash, screen.isMobile ? 10 : 24)}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {timeDistanceNow(transaction?.createdAt)}
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" mb-1">
                    <span>{t('createdBy')}</span>
                    <span className="text-primary hover:underline ml-1">
                      {`@${transaction?.created?.username}`}
                    </span>
                  </div>
                  <div className="text-gray-400 text-sm">
                    <span>Type:</span>
                    <span className="text-primary hover:underline ml-1">
                      {capitalize(transaction?.type)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-2 border:(top) border-blue-gray-200">
          <Link to={routes.TRANSACTIONS}>
            <BaseButton className="rounded-lg py-2 w-full" type="button">
              {t('viewAll')}
            </BaseButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

HomeLastest.propTypes = {
  dispatch: PropTypes.func,
  cids: PropTypes.array,
  transactions: PropTypes.array,
  isLoadingCids: PropTypes.bool,
  isLoadingTransactions: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  cids: makeSelectCids(),
  transactions: makeSelectTransactions(),
  isLoadingCids: makeSelectIsLoadingCids(),
  isLoadingTransactions: makeSelectIsLoadingTransactions(),
});

export default connect(mapStateToProps)(HomeLastest);
