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
    <div className="h-5 w-full flex gap-4 justify-center">
      <button onClick={pervHandler}>prev</button>
      <p>1</p>
      <p>2</p>
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

      <p>10</p>
      <p>11</p>
      <button onClick={nextHandler}>next</button>
    </div>
  );
};

export default Pagination;
