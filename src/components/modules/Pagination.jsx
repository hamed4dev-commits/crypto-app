const Pagination = ({ initial, setInitial }) => {
    const currentPage = initial?.page;
  //   const pages = [3, 4, 5, 6, 7, 8, 9];
  //   console.log(initial.page)
  const pervHandler = () => {
    if (currentPage <= 1) return;
    setInitial((perv) => ({ ...perv, page: currentPage - 1 }));
  };
  const nextHandler = () => {
    if (currentPage >= 11) return;
    setInitial((perv) => ({ ...perv, page: currentPage + 1 }));
  };
  return (
    <div className="h-8 w-full flex gap-4 justify-center align-middle py-1 text-center ">
      <button className="px-2 border-1 rounded-xl text-center " onClick={pervHandler}>prev</button>
      <p className="border-1 rounded p-1  ">1</p>
      <p className="border-1 rounded p-1  ">2</p>
      <span>...</span>
      {initial?.page > 2 && initial?.page < 10 && (
        // pages.map((i, index) => {
        //   return i === initial?.page &&( <button key={index}>{i}</button>)
        // })
        <>
          <p>{initial?.page}</p>
          <span>...</span>
        </>
      )}

      <p className="border-1 rounded p-1  ">10</p>
      <p className="border-1 rounded p-1  ">11</p>
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default Pagination;
