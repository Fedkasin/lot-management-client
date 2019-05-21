import { Localization } from 'expo';
import i18n from 'i18n-js';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

export const connection = `${i18n.t('Failed connect to server')}`;
export const notfound = `${i18n.t('There are no matches')}`;
export const authfail = `${i18n.t('Authentication failed')}`;
