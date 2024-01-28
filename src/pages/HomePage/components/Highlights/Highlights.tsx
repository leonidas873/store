/* eslint-disable @typescript-eslint/no-use-before-define */
import SingleHighLight from './SingleHighLight';

function Highlights() {
  function getClassName(index: number) {
    switch (index) {
      case 0:
        return 'col-span-1 lg:col-span-1';
      case 1:
        return 'col-span-1 lg:col-span-2';
      case 2:
        return 'col-span-1 lg:col-span-2';
      case 3:
        return 'col-span-1 lg:col-span-1';
      default:
        return 'col-span-1 lg:col-span-1';
    }
  }

  return (
    <div className="block mb-[217px]">
      <div className="m-auto flex flex-col justify-center items-center mb-[50px]">
        <h4 className="text-[#41587B] text-4xl text-center mb-5">
          This Weeks <br /> Highlights
        </h4>
        <div className="rounded bg-[#374151] w-[60px] h-[3px]" />
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
        {highlightsConfig.map((item, i) => (
          <SingleHighLight
            key={item.id}
            className={getClassName(i)}
            title={item.title}
            discount={item.discount}
            discountCode={item.discountCode}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
export default Highlights;

const highlightsConfig = [
  {
    id: 1,
    title: 'exlusive shoes',
    discount: 20,
    discountCode: 'VATR3920',
    img: '/images/Highglights4.png',
  },
  {
    id: 1,
    title: 'Exquisite Styles & Collections',
    discount: 20,
    discountCode: 'VATR3920',
    img: '/images/Highglights3.png',
  },
  {
    id: 1,
    title: 'New Arrivals',
    discount: 20,
    discountCode: 'VATR3920',
    img: '/images/Highglights2.png',
  },
  {
    id: 1,
    title: 'Exclusive Items',
    discount: 20,
    discountCode: 'VATR3920',
    img: '/images/Highglights1.png',
  },
];
