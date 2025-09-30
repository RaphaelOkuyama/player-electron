export default function PlayIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w.org/2000/svg"
    >
      <path
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        fill="#FCFCFC"
        stroke="#FCFCFC"
      />
    </svg>
  );
}