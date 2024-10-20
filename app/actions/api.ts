"use server";
export async function userRoute() {
  const response = await fetch("http://localhost:3000/api/users");
  return response.json();
}
