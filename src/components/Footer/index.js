import { FaFacebookF, FaTwitter, FaTelegramPlane } from 'react-icons/fa';
import LogoImage from 'assets/images/Logo.png';
import { CRYPTIZEN_SOCIAL, APP_NAME } from 'config';
import { useTranslation } from 'react-i18next';
import docs from './data/docs';
import pages from './data/pages';

export default function Footer2() {
  const { t } = useTranslation();
  return (
    <div className="bg-footer">
      <div className="py-10 mx-auto container">
        <div className="flex flex-wrap">
          <div className="w-2/5 <md:w-full lg:pr-4">
            <div className="flex items-center">
              <img alt="logo" src={LogoImage} className="w-15 h-15 mr-2" />
              <h3 className="text-lg text-gray-100 font-medium">{APP_NAME}</h3>
            </div>
            <p className="mt-5 text-gray-400 font-light">{t('footerIntro')}</p>
          </div>
          <div className="w-1/5 mt-5 <md:(w-1/2 mt-10)">
            <h4 className="text-17px font-medium text-gray-100">{t('page')}</h4>
            <ul className="mt-5 text-gray-400 text-sm">
              {pages.map((page, pageKey) => (
                <li
                  key={pageKey}
                  className="mb-2 cursor-pointer transition hover:text-primary"
                >
                  <a href={page?.link}>{page?.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5 mt-5 px-3.75 <md:(w-1/2 mt-10)">
            <h4 className="text-17px font-medium text-gray-100">{t('docs')}</h4>
            <ul className="mt-5 text-gray-400 text-sm">
              {docs.map((doc, docKey) => (
                <li
                  key={docKey}
                  className="mb-2 cursor-pointer transition hover:text-primary"
                >
                  <a href={doc?.link}>{doc?.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/5 mt-5 <md:(w-1/2)">
            <h4 className="text-17px font-medium text-gray-100">
              {t('contact')}
            </h4>
            <div className="mt-5">
              <a
                className="text-primary text-sm font-light"
                href="mailto:contact@cryptizen.io"
              >
                contact@cryptizen.io
              </a>

              <div className="flex items-center mt-2.5">
                <a
                  href={CRYPTIZEN_SOCIAL.facebook}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-sky-900 bg-opacity-60 shadow transition flex items-center justify-center text-white mr-2 hover:bg-social-facebook"
                  rel="noreferrer"
                >
                  <FaFacebookF className="footer2__contact-social-box__item--icon" />
                </a>
                <a
                  href={CRYPTIZEN_SOCIAL.twitter}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-sky-900 bg-opacity-60 shadow transition flex items-center justify-center text-white mr-2 hover:bg-social-twitter"
                  rel="noreferrer"
                >
                  <FaTwitter className="footer2__contact-social-box__item--icon" />
                </a>
                <a
                  href={CRYPTIZEN_SOCIAL.telegramCommunity}
                  target="_blank"
                  className="w-10 h-10 rounded-full bg-sky-900 bg-opacity-60 shadow transition flex items-center justify-center text-white hover:bg-social-telegram"
                  rel="noreferrer"
                >
                  <FaTelegramPlane className="footer2__contact-social-box__item--icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="h-1px w-90 <sm:w-full bg-gray-400 bg-opacity-20 mb-10" />
          <p className="text-gray-400 font-light text-sm">
            {`© 2022 ${APP_NAME}. ${t('copyright')}`}
          </p>
        </div>
      </div>
    </div>
  );
}
