export default function NextIcon({ onClick }) {
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
        // Path invertido para criar o ícone de "próximo" (▶|)
        d="M4 4L16 12L4 20V4ZM18 4H20V20H18V4Z"
        fill="#FCFCFC"
        stroke="#FCFCFC"
      />
    </svg>
  );
}