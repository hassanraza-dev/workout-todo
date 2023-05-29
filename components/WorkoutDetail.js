import { AiOutlineDelete } from "react-icons/ai";
const WorkoutDetail = ({
  workoutData,
  onUpdateProgress,
  deleteHandlerFunc,
}) => {
  return (
    <>
      <div
        onClick={() => onUpdateProgress()}
        className="w-full cursor-pointer h-auto sm:w-auto shadow-sm bg-black p-12 m-5 text-gray-400  rounded-xl  md:max-w-2xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105"
      >
        <div className="absolute top-5 right-5">
          <AiOutlineDelete
            onClick={(e) => {
              e.stopPropagation();
              deleteHandlerFunc();
            }}
            size={"32px"}
            color="red"
          />
        </div>
        <h1 className="text-2xl sm:text-6xl capitalize font-bold">
          {workoutData.title}
        </h1>
        <h1 className=" mt-3 font-bold">Reps : {workoutData.reps}</h1>
        <h1 className=" mt-3 font-bold">Weight : {workoutData.load}</h1>
        <h1
          className={`mt-3 ${
            workoutData.isCompleted ? "text-green-600" : "text-yellow-600"
          } font-bold`}
        >
          {workoutData.isCompleted ? "Completed" : "Incomplete"}
        </h1>
      </div>
    </>
  );
};

export default WorkoutDetail;
