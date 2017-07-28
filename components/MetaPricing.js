import { observer } from 'mobx-react';
import sortBy from 'lodash.sortby';

import { getMetaPricing } from '../lib/metaPricing';
import DatePicker from '../components/DatePicker';

const MetaPricing = ({ store, hotelId }) => {
    const { from, to } = store;
    const metaPricing = getMetaPricing(hotelId, from, to);
    return (
        <div>
            <h3>Prices</h3>
            <DatePicker store={store} />
            {metaPricing &&
                <ul>
                    {sortBy(metaPricing, ['price']).map(({ provider, price }) =>
                        <li key={provider}>
                            {provider} - ${Math.round(price)}
                        </li>
                    )}
                </ul>}
        </div>
    );
};

export default observer(MetaPricing);
