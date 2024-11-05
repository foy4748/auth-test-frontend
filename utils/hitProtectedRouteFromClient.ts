const SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_ADDRESS;
export const hitProtectedRouteFromClient = async () => {
  const res = await fetch(`${SERVER_ADDRESS}/api/auth`, {
    credentials: "include",
  });
  const data = await res.json();
  console.log(data);
  return data;
};
