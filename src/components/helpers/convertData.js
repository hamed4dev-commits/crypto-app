// const converteData = (data, type) => {
//     console.log(data)
//   const convertedData = data?.data[type].map((item) => {
//     return {
//       date: item[0],
//       [type]: item[1],
//     };
//   });
//   return convertedData
// };
const converteData = (data, type ) => {
  const series = data?.data?.[type];

  if (!series) {
    return [];
  }

  return series.map(([timestamp, value]) => ({
    date: new Date(timestamp).toLocaleString(),
    [type]: value,
  }));
}
export { converteData }
