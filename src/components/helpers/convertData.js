const converteData = (data, type) => {
    console.log(data)
  const convertedData = data.data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData
};

export { converteData };
