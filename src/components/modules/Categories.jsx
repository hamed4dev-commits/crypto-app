const Categories = ({ initial, setInitial }) => {
  // const clickHandler = () => {
  //   setCurrency()
  // }
  return (
    <div>
      <select
        value={initial.currency}
        onChange={(e) =>
          setInitial((initial) => ({ ...initial, currency: e.target.value }))
        }
      >
        <option value="usd" defaultChecked>
          USD $
        </option>
        <option value="eur">EURO €</option>
        <option value="jpy">YEN ¥</option>
      </select>
      {/* <button onClick={clickHandler} className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl ">
        currency
      </button> */}
      <button
        value="desc"
        onClick={(e) =>
          setInitial((initial) => ({ ...initial, order: e.target.value }))
        }
        className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl "
      >
        descending
      </button>
      <button
        value="asc"
        onClick={(e) =>
          setInitial((initial) => ({ ...initial, order: e.target.value }))
        }
        className="cursor-pointer border-2 border-cyan-600 p-2.5 rounded-2xl "
      >
        ascending
      </button>
      <div>
        search
        <button>currency</button>
      </div>
    </div>
  );
};

export default Categories;
