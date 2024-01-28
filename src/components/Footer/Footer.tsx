import RenderIcon from 'components/ui/RenderIcon';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-[#F4F4F4] pb-[150px] pt-[45px]">
      <div className="container flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-dark mb-1 text-xl">Navigation</div>
            <RenderIcon name="underline" />
          </div>
          <div className="flex flex-col text-[#41587B]">
            <Link to="/products">products</Link>
            <Link to="/products">categories</Link>
          </div>
          <div className="flex gap-2">
            <Link to="">
              <RenderIcon name="facebook" />
            </Link>
            <Link to="">
              <RenderIcon name="instagram" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <div className="text-dark mb-1 text-xl">payments</div>
            <Link to="">
              <RenderIcon name="underline" />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link to="">
              <RenderIcon name="mastercard" className="max-w-[50px]" />
            </Link>
            <Link to="">
              <RenderIcon name="visa" className="max-w-[50px]" />
            </Link>
            <Link to="">
              <RenderIcon name="amex" className="max-w-[50px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
