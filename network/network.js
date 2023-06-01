import axiosInstance from "./config";

export const fetchAllWorkouts = async () => {
  const response = await axiosInstance.get("/workouts");
  return response.data;
};

export const updateWorkout = async (id, data) => {
  const response = await axiosInstance.patch(`/workouts/${id}`, data);
  return response.data;
};

export const createWorkout = async (data) => {
  const response = await axiosInstance.post(`/workouts`, data);
  return response.data;
};

export const deleteWorkout = async (id) => {
  const response = await axiosInstance.delete(`/workouts/${id}`);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axiosInstance.post(`/user/login`, credentials);
  return response.data;
};
