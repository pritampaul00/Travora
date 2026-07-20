import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function planTrip(data: {
  message: string;
}) {
  const response = await axios.post(
    `${API_URL}/travel`,
    data,
  );

  return response.data;
}