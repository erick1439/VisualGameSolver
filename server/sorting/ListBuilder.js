export const getList = (size, min, max) => {
    const randomArray = [];
  
    for (let i = 0; i < size; i++) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomValue);
    }
  
    return randomArray;
};
  