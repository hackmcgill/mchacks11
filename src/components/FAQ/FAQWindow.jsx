import * as React from "react"
const SvgComponent = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1271}
    height={1185}
    fill="none"
    {...props}
  >
    <path // outside border (z-index behind most others) **
      fill="#C4C4C4"
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M2 10.873a8 8 0 0 1 8-8h1251c4.42 0 8 3.582 8 8V1174.68c0 4.41-3.58 8-8 8H10c-4.418 0-8-3.59-8-8V10.873Z"
    />
    <path // up arrow
      fill="#1C1C1C"
      d="M1242.55 163.342c.75-1.422 2.79-1.422 3.54 0l5.9 11.179c.7 1.332-.27 2.934-1.77 2.934h-11.8c-1.51 0-2.47-1.602-1.77-2.934l5.9-11.179Z"
    />
    <path // down arrow
      fill="#1C1C1C"
      d="M1242.53 1150.73c.74 1.47 2.84 1.47 3.58 0l5.98-11.96c.66-1.33-.3-2.9-1.79-2.9h-11.96c-1.49 0-2.46 1.57-1.79 2.9l5.98 11.96Z"
    />
    <path // reload button
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M235.658 80.75c5.666 1.809 9.81 7.59 9.81 14.444 0 7.638-5.147 13.945-11.812 14.906m2.002-29.35 2.264 6.093m-2.264-6.094 5.282-2.257m-12.828 31.147c-5.667-1.809-9.81-7.592-9.81-14.445 0-7.638 5.146-13.945 11.811-14.906m-2.001 29.351-1.51-5.676m1.51 5.676-5.283 1.84"
    />
    <path // borders yellow top bar
      fill="#FCB427"
      stroke="#1C1C1C"
      strokeWidth={4}
      d="M204.943 58.337H2V10.873a8 8 0 0 1 8-8h1103.08v55.464H204.943ZM1181.03 17.74h23.43c1.4 0 2.53 1.13 2.53 2.525v2.524h-28.49v-2.524a2.526 2.526 0 0 1 2.53-2.525Z"
    />
    <path // borders all white areas **
      fill="#fff"
      stroke="#1C1C1C"
      strokeWidth={4}
      d="M261.414 85.58v20.733c0 6.628 5.373 12 12 12h897.546c6.63 0 12-5.372 12-12V85.581c0-6.628-5.37-12-12-12H273.414c-6.627 0-12 5.372-12 12Zm949.136 66.88H29.405c-6.628 0-12 5.372-12 12v978.91c0 6.63 5.372 12 12 12H1210.55c6.63 0 12-5.37 12-12V164.46c0-6.628-5.37-12-12-12Z"
    />
    <path // home and arrow keys
      fill="#1C1C1C"
      fillRule="evenodd"
      d="m93.513 113.913 23.042-19.031L93.513 75.85v9.983h-21.86v16.805h21.86v11.275ZM33.25 113.913 10.21 94.882 33.25 75.85v9.983h21.86v16.805H33.25v11.275ZM163.229 73.264l18.315 17.81.001.001h-.001v26.159h-11.701V98.311h-8.14v18.923h-16.789v-26.16h.001l18.314-17.81Z"
      clipRule="evenodd"
    />
    <rect // File icon at top
      width={50.452}
      height={33.958}
      x={1205.99}
      y={83.343}
      fill="#1C1C1C"
      rx={1}
    />
    <path // top of file icon
      fill="#1C1C1C"
      d="M1208.11 75.233c.16-.377.52-.623.93-.623h15.25c.41 0 .78.246.93.623l1.56 3.821c.27.658-.22 1.378-.93 1.378h-18.37c-.71 0-1.19-.72-.93-1.378l1.56-3.82Z"
    />
  </svg>
)
export default SvgComponent
