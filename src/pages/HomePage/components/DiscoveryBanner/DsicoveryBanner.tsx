import { Link } from 'react-router-dom';

function DiscoveryBanner() {
  return (
    <div className="flex items-center justify-center bg-[url('/images/discoveryBg.png')] bg-cover py-[212px] mb-[140px]">
      <div className="flex w-full max-w-[730px] flex-col items-center justify-center  rounded-[20px]  bg-[#F7F8FA] py-[46px]">
        <img src="/images/discoveryIcon.png" alt="discovery-icon" />
        <div className="flex flex-col py-5 text-center text-4xl font-medium text-[#41587B]">
          <span>Start The Day</span>
          <span>With Closet.</span>
        </div>
        <Link
          className="rounded-md bg-[#3D5572] px-[44px] py-[14px] text-xl font-medium text-white"
          to="/products"
        >
          Discovery our collection
        </Link>
      </div>
    </div>
  );
}

export default DiscoveryBanner;
