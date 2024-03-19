
import MapSec from '../components/MapSec';

const MainPage = () => {

return (
        <div>
        <header>
            <h1>Welcome to My Amazing App!</h1>
        </header>
        <main>
            <div className="map-container">
            <MapSec />
            </div>
            <div className="content">
            {/* Other content goes here */}
            </div>
        </main>
        </div>
);
};

export default MainPage;
