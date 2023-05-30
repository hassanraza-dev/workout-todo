import React, { useEffect, useState } from "react";
import {
  deleteWorkout,
  fetchAllWorkouts,
  updateWorkout,
} from "../network/network";
import WorkoutDetail from "../components/WorkoutDetail";
import Link from "next/link";
import PlusButton from "../components/PlusButton";
import ModalForm from "../components/ModalForm";
import { useDispatch } from "react-redux";
import { add } from "../store/workoutSlice";

const Home = () => {
  const [allWorkouts, setAllWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getWorkouts();
  }, []);

  const getWorkouts = async () => {
    fetchAllWorkouts()
      .then((res) => {
        setAllWorkouts(res);
        dispatch(add(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = (e) => {
    // handledebo(e.target.value);
    if (e.target.value === "") {
      setSearchKeyword(e.target.value);
      return getWorkouts();
    }
    setSearchKeyword(e.target.value);
    const filterItems = allWorkouts.filter((val) => {
      return val.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredWorkouts(filterItems);
  };

  const updateHandler = (workoutId) => {
    const itemToUpdate = allWorkouts.find((val) => {
      return val._id === workoutId;
    });
    updateWorkout(workoutId, {
      ...itemToUpdate,
      isCompleted: !itemToUpdate.isCompleted,
    })
      .then((res) => {
        console.log(res.data);
        getWorkouts();
      })
      .catch((err) => console.log(err));
  };

  const deleteHandler = (workoutId) => {
    deleteWorkout(workoutId)
      .then((res) => {
        getWorkouts();
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="flex justify-center py-6">
        <input
          className="px-4 py-2 w-10/12 sm:w-[420px] rounded border-gray-300 focus:outline-none focus:border-indigo-500"
          type="text"
          placeholder="Search"
          value={searchKeyword}
          onChange={handleSearch}
        />
      </div>
      <div className="flex justify-center flex-wrap mt-5">
        {(searchKeyword ? filteredWorkouts : allWorkouts).map(
          ({ title, reps, load, isCompleted, _id }) => {
            return (
              <WorkoutDetail
                key={_id}
                workoutData={{ title, reps, load, isCompleted }}
                onUpdateProgress={() => updateHandler(_id)}
                deleteHandlerFunc={() => deleteHandler(_id)}
              />
            );
          }
        )}
      </div>
      <ModalForm updateData={getWorkouts} />
    </>
  );
};

export default Home;
