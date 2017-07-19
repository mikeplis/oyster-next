import { IntlProvider } from 'react-intl';

const messages = {
    'header.home': 'Homey'
};

export default WrappedComponent => props => {
    return (
        <IntlProvider locale="en" messages={messages}>
            <WrappedComponent {...props} />
        </IntlProvider>
    );
};
