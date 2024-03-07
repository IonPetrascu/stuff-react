export const getActiveCategory = (CAT, index) => {
  console.log(CAT.list);
  for (let i = 0; i < CAT.list.length; i++) {
    if (CAT.list[i].id === Number(index)) {
      return CAT.list[i].name;
    }
  }
};
