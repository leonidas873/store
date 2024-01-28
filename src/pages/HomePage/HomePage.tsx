import CategoriesCarousel from './components/CategoriesCarousel';
import DiscoveryBanner from './components/DiscoveryBanner/DsicoveryBanner';
import Highlights from './components/Highlights';
import SpringBanner from './components/SpringBanner';

function HomePage() {
  return (
    <div>
      <DiscoveryBanner />
      <CategoriesCarousel />
      <SpringBanner />
      <Highlights />
    </div>
  );
}

export default HomePage;
