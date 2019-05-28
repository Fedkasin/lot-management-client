import { Localization } from 'expo';
import i18n from 'i18n-js';
import Locales from '../../assets/locales';

i18n.fallbacks = true;
i18n.translations = Locales;
i18n.locale = Localization.locale;

export const translate = (word) => i18n.t(word);

export default translate;
