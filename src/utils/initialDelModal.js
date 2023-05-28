export const initialDelModal = (dataState) => {
  let initialDelModal = {};
  for (let i = 0; i < dataState?.cart?.length; i++) {
    initialDelModal = { ...initialDelModal, [dataState?.cart[i].id]: false };
  }
  return initialDelModal;
};
