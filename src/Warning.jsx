export default function Warning({ warningText }) {
  return (
    <div className="warning" role="alert" aria-live="polite">
      {warningText}
    </div>
  );
}
