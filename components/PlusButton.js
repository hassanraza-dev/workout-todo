import Link from "next/link";

const PlusButton = ({ onModalOpen }) => {
  return (
    <div
      onClick={onModalOpen}
      className="plus-button cursor-pointer fixed bottom-[20px]  right-[20px] flex items-center justify-center w-[60px] h-[60px] rounded-[50%] bg-[#0070f3] shadow-sm"
    >
      <span className="text-3xl"> +</span>
      <style jsx>{`
        span {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default PlusButton;
