import Layout from '../../components/Layout';
import Hotel from '../../components/Hotel';
import MetaPricing from '../../components/MetaPricing';
import withData from '../../lib/withData';
import { initStore } from '../../lib/store';

const HotelPage = props => {
    const hotelId = props.url.query.id;
    return (
        <Layout>
            <div>Photos</div>
            <Hotel id={hotelId} />
            <MetaPricing hotelId={hotelId} store={initStore()} />
        </Layout>
    );
};

export default withData(HotelPage);
