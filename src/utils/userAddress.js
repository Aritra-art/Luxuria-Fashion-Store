export const userAddress = async (authState) => {
  const firstName = await authState?.userDetails?.firstName;
  return {
    userName: firstName,
  };
};
