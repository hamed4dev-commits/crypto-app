
const TableCoin = ({data}) => {
    console.log(data)
  return (
    <table>
        <thead>
            <tr>coin</tr>
            <tr>name</tr>
            <tr>price</tr>
            <tr>market</tr>
            <tr>changes 24H</tr>
            <tr>status</tr>

        </thead>
        <tbody>
            {/* {data.map(coin => )} */}
        </tbody>

    </table>
  )
}

export default TableCoin