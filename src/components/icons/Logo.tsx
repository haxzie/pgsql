export default function Logo({ size = 24 }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M256 494C387.444 494 494 387.444 494 256C494 124.556 387.444 18 256 18C124.556 18 18 124.556 18 256C18 387.444 124.556 494 256 494ZM256 402.069C336.671 402.069 402.069 336.672 402.069 256C402.069 175.329 336.671 109.931 256 109.931C175.328 109.931 109.931 175.329 109.931 256C109.931 336.672 175.328 402.069 256 402.069Z"
        fill="url(#paint0_linear_40_46)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_40_46"
          x1="107.378"
          y1="61.9227"
          x2="352.528"
          y2="434.755"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F91E5C" />
          <stop offset="1" stopColor="#2D3CE0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
