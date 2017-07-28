import shuffle from 'lodash.shuffle';

const PROVIDERS = [
    'Travelocity',
    'Booking.com',
    'Expedia',
    'Hotels.com',
    'Orbitz',
    'Hotwire'
];

// generates pseudo-random pricing numbers
// should return same pricing for same from/to
// TODO: can this be converted to an HOC so that components don't have this hidden external dependency?
export function getMetaPricing(hotelId, from, to) {
    const providers = shuffle(PROVIDERS);
    return (
        from &&
        to &&
        providers.map(provider => {
            const price = Math.random() * 200 + 300; // random number between 300 and 500
            return {
                provider,
                price
            };
        })
    );
}
