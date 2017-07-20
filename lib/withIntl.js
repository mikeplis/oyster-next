import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);

const messages = {
    en: {
        'header.home': 'Home',
        'header.destinations': 'Destinations',
        'header.collections': 'Collections',
        'header.articles': 'Stories',
        'header.photoFakeouts': 'Photo Fakeouts'
    },
    es: {
        'header.home': 'Casa',
        'header.destinations': 'Destinos',
        'header.collections': 'Colecciones',
        'header.articles': 'Artículos',
        'header.photoFakeouts': 'Fotos trucadas'
    }
};

export default WrappedComponent => props => {
    const locale = 'en';
    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <WrappedComponent {...props} />
        </IntlProvider>
    );
};
