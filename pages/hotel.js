import Layout from '../components/Layout';
import Hotel from '../components/Hotel';
import withData from '../lib/withData';

const HotelPage = props => {
    console.log(props);
    const hotelId = props.url.query.id;
    return (
        <Layout>
            <Hotel id={hotelId} />
        </Layout>
    );
};

export default withData(HotelPage);
