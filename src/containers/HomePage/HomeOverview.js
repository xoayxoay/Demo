import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'react-i18next';
import { APP_NAME } from 'config';
import LogoImage from 'assets/images/Logo.png';
import CoinMarketCap from 'assets/images/CoinMarketCap.png';
import { useScreen } from 'shared-hooks/useScreen';
import { Link } from 'react-router-dom';
import routes from 'containers/App/routes';
import HomeChart from './HomeChart';
import { requestTotalOverviews } from './actions';
import { makeSelectTotalOverviews } from './selectors';
import totals from './data/totals';

function HomeOverview({ dispatch, totalOverviews }) {
  const { t } = useTranslation();
  const screen = useScreen();
  const chartWrapRef = useRef(null);
  const [chartOffset, setChartOffset] = useState([]);

  useEffect(() => {
    dispatch(requestTotalOverviews());
  }, []);

  useEffect(() => {
    setChartOffset([
      chartWrapRef?.current?.clientWidth,
      screen.isMobile ? 150 : 120,
    ]);
  }, []);

  const RenderAmount = (label) => {
    let amount = 0;
    switch (label) {
      case 'totalCids':
        amount = totalOverviews?.totalCid || 0;
        break;
      case 'totalNftCid':
        amount = totalOverviews?.totalNFT || 0;
        break;
      case 'totalTransaction':
        amount = totalOverviews?.totalTransaction || 0;
        break;
      case 'totalNftGame':
        amount = totalOverviews?.totalNftGame || 0;
        break;
      default:
        break;
    }
    return amount;
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 py-10">
      <div className="section-box p-6 flex items-center">
        <div>
          <div className="pb-4 mb-4 flex items-center border:(bottom) border-blue-gray-200">
            <img src={LogoImage} alt="logo" className="w-12 h-12" />
            <div className="ml-4">
              <div className="text-xs font-medium text-gray-500">
                {`${APP_NAME.toUpperCase()} ${t('price').toUpperCase()}`}
              </div>
              <div>
                <span className="text-lg font-medium text-gray-800 mr-2">
                  $0
                </span>
                <span className="text-green-400 text-sm">(+0.00%)</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={CoinMarketCap} alt="logo" className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <div className="text-xs font-medium text-gray-500">
                {`${APP_NAME.toUpperCase()} ${t(
                  'marketCapOnBsc',
                ).toUpperCase()}`}
              </div>
              <div>
                <span className="text-lg font-medium text-gray-800 mr-2">
                  $0.00
                </span>
                <span className="text-sm">(0 CTZ)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box p-6 flex items-center">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-6 gap-y-8">
          {totals.map((total, totalKey) => (
            <Link key={totalKey} to={total?.route || routes.HOME}>
              <div className="flex items-center">
                <div className="rounded-lg w-12 h-12 bg-blue-gray-200 text-lg mr-4 flex items-center justify-center">
                  {total.image && (
                    <img src={total.image} alt="ipfs" className="w-7 h-8" />
                  )}
                  {total.icon && <total.icon className="w-7 h-8" />}
                  {total.text && <div>{total.text}</div>}
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-500">
                    {t(total.label).toUpperCase()}
                  </div>
                  <div className="text-lg font-medium text-gray-800">
                    {RenderAmount(total.label)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="section-box p-6">
        <div className="text-sm font-medium text-gray-500">
          {`${APP_NAME.toUpperCase()} ${t('14dayTransaction').toUpperCase()}`}
        </div>
        <div ref={chartWrapRef} className="w-full h-full">
          {chartOffset.length && (
            <HomeChart width={chartOffset[0]} height={chartOffset[1]} />
          )}
        </div>
      </div>
    </div>
  );
}

HomeOverview.propTypes = {
  dispatch: PropTypes.func,
  totalOverviews: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  totalOverviews: makeSelectTotalOverviews(),
});

export default connect(mapStateToProps)(HomeOverview);
