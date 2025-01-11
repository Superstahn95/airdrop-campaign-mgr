interface FilterProps {
  filterOption: "all" | "open" | "closed";
  setFilterOption: React.Dispatch<
    React.SetStateAction<"all" | "open" | "closed">
  >;
}
function Filter({ filterOption, setFilterOption }: FilterProps) {
  const filters: ["all", "open", "closed"] = ["all", "open", "closed"];
  return (
    <div className="flex items-center space-x-5 mb-7">
      {filters.map((filter) => (
        <Radio
          key={filter}
          text={filter}
          currentOption={filterOption}
          setFilter={setFilterOption}
        />
      ))}
    </div>
  );
}

function Radio({
  text,
  currentOption,
  setFilter,
}: {
  text: "all" | "open" | "closed";
  currentOption: "all" | "open" | "closed";
  setFilter: React.Dispatch<React.SetStateAction<"all" | "open" | "closed">>;
}) {
  return (
    <div className="flex items-center space-x-2 capitalize">
      {/* rounded radio */}
      <div
        onClick={() => setFilter(text)}
        className={`${
          currentOption === text && "bg-white"
        } w-[20px] h-[20px] rounded-full border border-white cursor-pointer`}
      />
      <span className="ml-1 text-white text-xl font-semibold capitalize">
        {text}
      </span>
    </div>
  );
}

export default Filter;
