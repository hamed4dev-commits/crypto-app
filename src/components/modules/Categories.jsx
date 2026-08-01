const Categories = () => {
  return (
    <div>
      <button className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl ">
        currency
      </button>
      <button className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl ">
        assending
      </button>
      <button className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl ">
        descending
      </button>
      <div>
        search
        <button>currency</button>
      </div>
    </div>
  );
};

export default Categories;
