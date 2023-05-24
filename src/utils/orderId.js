export const orderId = () => {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz".split("");
  let randomId = "";
  for (let i = 0; i < 8; i++) {
    randomId += Math.floor(Math.random() * chars.length);
  }
  return randomId;
};
