import useSearchParams from 'hooks/useSearchParams';

function Sort() {
  const { setParams } = useSearchParams();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParams({ sort: e.target.value });
  };
  return (
    <div className="flex gap-2 items-center pb-3">
      <div className="text-gray-500 text-xs">Sort by:</div>
      <select onChange={handleChange} className="border-none p-0">
        <option value="asc" selected>
          asc
        </option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
}
export default Sort;
