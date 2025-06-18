import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="text-center mt-10">
      <Link to="/signup">
        <button className="text-sm border h-[50px] w-[180px] rounded-[10px] text-white bg-black border-black">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Button;
