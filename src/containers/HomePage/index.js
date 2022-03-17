import { connect } from 'react-redux';
import Layout from 'components/Layouts';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import reducer from './reducer';
import saga from './saga';
import HomeSearch from './HomeSearch';
import HomeOverview from './HomeOverview';
import HomeLastest from './HomeLastest';

const key = 'homePage';

function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <Layout isShowBackground>
      <HomeSearch />
      <HomeOverview />
      <HomeLastest />
    </Layout>
  );
}

HomePage.propTypes = {};

export default connect()(HomePage);
