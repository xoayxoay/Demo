import BaseButton from 'components/BaseButton';
import LogoImage from 'assets/images/Logo-200.png';
import routes from 'containers/App/routes';
import { useTranslation } from 'react-i18next';
import Layout from 'components/Layouts';

function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="h-3/4-screen flex items-center justify-center flex-col">
        <div>
          <img src={LogoImage} alt="logo" className="w-35 h-35" />
        </div>
        <h1 className="text-5xl font-medium text-primary mt-5">Oops!</h1>
        <p className="mt-5">{t('notFoundPage')}</p>
        <div className="mt-8">
          <BaseButton
            route={routes.HOME}
            type="link"
            className="rounded-lg py-2 px-4 hover:underline"
          >
            {t('backToHome')}
          </BaseButton>
        </div>
      </div>
    </Layout>
  );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
