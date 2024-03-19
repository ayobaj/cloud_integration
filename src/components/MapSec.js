import PropTypes from 'prop-types'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapSec = (props) => {
    return (
        <Map
        google={props.google}
        zoom={14}
        initialCenter={{
            lat: 37.774929,
            lng: -122.419416
        }}
        />
    );
}

MapSec.propTypes = {
    google: PropTypes.object.isRequired
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapSec);
