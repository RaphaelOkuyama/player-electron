// components/icons/PreviousIcon.jsx

export default function PreviousIcon({ onClick }) {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4H4V20H6V4ZM20 4L8 12L20 20V4Z"
        fill="#FCFCFC"
        stroke="#FCFCFC"
      />
    </svg>
  );
}