import axiosInstance from "./config";

export const fetchAllWorkouts = async () => {
  const response = await axiosInstance.get("/");
  return response.data;
};

export const updateWorkout = async (id, data) => {
  const response = await axiosInstance.patch(`/${id}`, data);
  return response.data;
};

export const createWorkout = async (data) => {
  const response = await axiosInstance.post(`/`, data);
  return response.data;
};

export const deleteWorkout = async (id) => {
  console.log(id, "id");
  const response = await axiosInstance.delete(`/${id}`);
  return response.data;
};
