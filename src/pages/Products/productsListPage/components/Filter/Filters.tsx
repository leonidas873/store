import Checkbox from 'components/ui/checkbox';
import useSearchParams from 'hooks/useSearchParams';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface IProps {
  minPrice?: number;
  maxPrice?: number;
  categories: string[];
}

function Filters(props: IProps) {
  const { minPrice = 0, maxPrice = 1000, categories = [] } = props;
  const { getParams, setParams } = useSearchParams();
  const searchParams = getParams();

  const handleCheck = (name: string) => {
    const cloned = structuredClone(searchParams);
    if (cloned.categoryName === name) {
      delete cloned.categoryName;
    } else {
      cloned.categoryName = name;
    }
    setParams(cloned);
  };

  const handleSlide = (range: [number, number]) => {
    const cloned = structuredClone(searchParams);
    // eslint-disable-next-line prefer-destructuring
    cloned.minPrice = range[0];
    // eslint-disable-next-line prefer-destructuring
    cloned.maxPrice = range[1];
    setParams(cloned);
  };

  const minValue = Number(searchParams.minPrice) || minPrice;
  const maxValue = Number(searchParams.maxPrice) || maxPrice;

  return (
    <div className="w-full max-w-[300px] text-[#1F2937] bg-gray-50 p-4">
      <div className="mb-8">
        <p className="uppercase mb-6">prices</p>
        <div className="flex justify-between">
          <span className="capitalize mb-4">range:</span>
          <span>
            ₾{minValue} - ₾{maxValue}
          </span>
        </div>
        <Slider
          range
          min={0}
          max={1000}
          value={[minValue, maxValue]}
          defaultValue={[minValue, maxValue]}
          onChange={(e) => handleSlide(e as [number, number])}
          styles={{
            rail: { backgroundColor: '#cbcbcb' },
            handle: { backgroundColor: '#111827', border: 'none' },
            track: { backgroundColor: '#41587B' },
          }}
        />
      </div>
      <div>
        <p className="uppercase mb-6">categories</p>
        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <Checkbox
              key={category}
              name={category}
              onChange={handleCheck}
              checked={Boolean(searchParams?.categoryName === category)}
              label={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
