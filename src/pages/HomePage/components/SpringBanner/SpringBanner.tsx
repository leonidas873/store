import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import CountdownTimer from './CountDown';

function SpringBanner() {
  return (
    <div className="mb-[113px] bg-[url('/images/springBg.png')] bg-cover max-w-[1200px] mx-auto flex h-[533px]">
      <div className="ml-auto pt-[68px] mr-[140px]">
        <h4 className="mb-6 text-2xl ml-6">
          <span className="text-[#3E5673] uppercase">spring </span>
          <span className="text-[#DE4F46] uppercase">collection</span>
        </h4>
        <Link
          className="uppercase flex gap-3 items-center w-fit p-3 bg-white ml-6 mb-[80px]"
          to="/products"
        >
          <span className="text-[#EB5757] text-xs">shop now</span>
          <FaLongArrowAltRight className="text-[#EB5757]" />
        </Link>
        <CountdownTimer targetDate="2024-02-25T00:00:00" />
      </div>
    </div>
  );
}
export default SpringBanner;
