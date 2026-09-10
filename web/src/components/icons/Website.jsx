export function Website(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      name="website"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.25 2.46 3.38 5.46 3.38 9S14.25 18.54 12 21c-2.25-2.46-3.38-5.46-3.38-9S9.75 5.46 12 3Z" />
    </svg>
  );
}
