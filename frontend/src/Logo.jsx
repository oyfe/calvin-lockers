import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <div className="w-[130px] h-[32px] flex-shrink-0 ">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="32"
            viewBox="0 0 78 32"
            fill="none"
          >
            <g clipPath="url(#clip0_3_7)">
              <path d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z" fill="#FF7A00" />
              <path d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z" fill="#FF9736" />
              <path d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z" fill="#FFBC7D" />
            </g>
            <defs>
              <clipPath id="clip0_3_7">
                <rect width="78" height="32" fill="white" />
              </clipPath>
            </defs>
            
          </svg>
          <h1 className="text-white font-bold">Lockers</h1>
        </Link>
      </div>
    </>
  );
}

export default Logo;
