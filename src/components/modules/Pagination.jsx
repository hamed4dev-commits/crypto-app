const Pagination = ({ initial, setInitial }) => {
    const currentPage = initial?.page;

    const clickHandler = (e) => {
      console.log(e.target.innerText);
      setInitial((perv) => ({ ...perv, page: +e.target.innerText }));
    }
  
  const pervHandler = () => {
    if (currentPage <= 1) return;
    setInitial((perv) => ({ ...perv, page: currentPage - 1 }));
  };
  const nextHandler = () => {
    if (currentPage >= 11) return;
    setInitial((perv) => ({ ...perv, page: currentPage + 1 }));
  };
  return (
    <div className="h-11 w-full flex gap-4 justify-center align-middle py-1 text-center ">
      <button className={`px-2 border-1 rounded-xl text-center  ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={pervHandler}>prev</button>
      <p className={`border-1 rounded p-1 cursor-pointer ${currentPage === 1 && "bg-cyan-600 text-black"} `} onClick={clickHandler}>1</p>
      <p className={`border-1 rounded p-1 cursor-pointer ${currentPage === 2 && "bg-cyan-600 text-black"} `} onClick={clickHandler}>2</p>
      <span>...</span>
      {currentPage > 2 && currentPage < 10 && (
        <>
          <p className={`border-1 rounded p-1 ${currentPage === currentPage && "bg-cyan-600 text-black"} `}>{currentPage}</p>
          <span>...</span>
        </>
      )}

      <p className={`border-1 rounded p-1 cursor-pointer ${currentPage === 10 && "bg-cyan-600 text-black"} `}onClick={clickHandler}>10</p>
      <p className={`border-1 rounded p-1 cursor-pointer ${currentPage === 11 && "bg-cyan-600 text-black"} `} onClick={clickHandler}>11</p>
      <button className={`px-2 border-1 rounded-xl text-center  ${currentPage === 11 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`} onClick={nextHandler}>next</button>
    </div>
  );
};

export default Pagination;
