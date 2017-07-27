import Layout from '../components/Layout';
import Hotel from '../components/Hotel';
import withData from '../lib/withData';
import { initStore } from '../lib/store';

const HotelPage = props => {
    const hotelId = props.url.query.id;
    return (
        <Layout>
            <Hotel id={hotelId} store={initStore()} />
        </Layout>
    );
};

export default withData(HotelPage);
