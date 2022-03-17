// import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { APP_NAME_EXPLORER } from 'config';
import routes from 'containers/App/routes';
import { routeTransform } from 'utils/route';
import { useHistory } from 'react-router-dom';

function HomeSearch() {
  const history = useHistory();
  const { handleSubmit, register } = useForm();

  const handleSubmitSearch = ({ q }) => {
    if (q?.length === 46) history.push(routeTransform(routes.CID, [q]));
    else history.push(routes.NOTMATCH);
  };

  return (
    <div className="mx-auto max-w-2xl flex-col items-center justify-center pt-20 pb-10">
      <div className="text-center text-3xl text-gray-800 font-medium tracking-wide">
        {APP_NAME_EXPLORER}
      </div>
      <div className="relative my-10">
        <form onSubmit={handleSubmit(handleSubmitSearch)}>
          <div className="shadow-xl w-full rounded-lg h-16 border border-blue-gray-200 relative overflow-hidden">
            <div className="absolute right-0 left-0 h-full w-16 bg-blue-gray-200 flex items-center justify-center">
              <BiSearchAlt className="text-gray-500 w-8 h-8" />
            </div>
            <input
              type="text"
              placeholder="Search Cryptizen"
              autoComplete="off"
              spellCheck="false"
              className="bg-white outline-none border-none w-full h-full pr-5 pl-20"
              {...register('q', { required: true, minLength: 2 })}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

HomeSearch.propTypes = {};

const mapStateToProps = createStructuredSelector({});

export default connect(mapStateToProps)(HomeSearch);
