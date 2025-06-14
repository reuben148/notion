import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
      {/* name and icon */}
      <div className="flex items-center justify-center px-4 py-4">
        <svg
          className="w-[36px] h-[36px] text-gray-800 dark:text-white "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m16.1325 4.33451-2.5233-1.40664c-.4721-.26314-1.0678-.1036-1.3452.36025-.5301.88653-.995 1.16623-1.5715 1.51306l-.0109.00653c-.68512.41222-1.48439.89668-2.26786 2.20693-.78556 1.31373-.82234 2.23251-.84978 3.01976l-.00064.0183c-.02242.6445-.04051 1.1644-.56688 2.0447-.53011.8866-.99504 1.1663-1.57156 1.5131l-.01086.0065c-.68515.4122-1.48441.8967-2.26789 2.207-.13881.2321-.17767.5106-.10769.7719.06998.2612.24281.483.47907.6147l2.62175 1.4615c.14127-.4135.30621-.7369.42823-.941.78347-1.3102 1.58276-1.7947 2.26791-2.2069l.01085-.0066c.57652-.3468 1.04146-.6265 1.57155-1.513.5264-.8803.5445-1.4003.5669-2.0448l.0006-.0183c.0275-.7872.0643-1.706.8498-3.01973.7835-1.31024 1.5828-1.79471 2.2679-2.20692l.0109-.00653c.5738-.34523 1.0371-.62397 1.5642-1.50087.1235-.22119.2956-.5451.4544-.87294ZM7.93136 19.6711l2.42894 1.354c.4721.2632 1.0678.1037 1.3452-.3602.5301-.8865.995-1.1662 1.5715-1.513l.0109-.0066c.6852-.4122 1.4844-.8967 2.2679-2.2069.7855-1.3137.8223-2.2325.8498-3.0198l.0006-.0183c.0224-.6444.0405-1.1644.5669-2.0447.5301-.8865.995-1.1662 1.5715-1.5131l.0109-.0065c.6852-.41221 1.4844-.89667 2.2679-2.20692.1388-.23214.1777-.51061.1077-.77188-.07-.26128-.2428-.48306-.479-.61477L17.882 5.30974c-.1678.34035-.34.6625-.4657.88717-.0047.00832-.0095.01658-.0143.02476-.7835 1.31025-1.5828 1.79471-2.2679 2.20693l-.0109.00653c-.5765.34683-1.0415.62653-1.5716 1.51306-.5263.88031-.5444 1.40031-.5668 2.04471l-.0007.0183c-.0274.7873-.0642 1.7061-.8498 3.0198-.7834 1.3102-1.5827 1.7947-2.26785 2.2069l-.01085.0065c-.57651.3469-1.04144.6266-1.57154 1.5131-.10167.17-.25746.4945-.3527.9136Z"
          />
        </svg>
        <p className="font-serif py-2 px-2">Station</p>
      </div>

      {/* sign in and login section */}
      <div className="flex items-center justify-center px-4 py-2 gap-2">
        <button>Log in</button>
        <button className="border w-[75px] h-[40px] text-white border-black rounded-[6px] bg-black">
          Sign up
        </button>
      </div>

      {/* github icon */}
      <div className="flex justify-center px-4 py-4">
      <a href="https://github.com/reuben148" target="_blank" rel="noopener noreferrer">
  <svg
    className="w-[25px] h-[25px] text-gray-800 dark:text-white hover:bg-blue-100"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fill-rule="evenodd"
      d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
      clip-rule="evenodd"
    />
  </svg>
</a>

      </div>
    </div>
  );
}

export default Navbar;
