import BackgroundImageHeader from "./BackgroundImageHeader";
import H1 from "./H1";

export default function Header() {
  return (
    <header>
      <BackgroundImageHeader />
      <H1>
        Phrase <span className="first-heading--thin">Analytics </span>
      </H1>
    </header>
  );
}
