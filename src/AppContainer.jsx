import StatisticsWrapper from "./StatisticsWrapper";
import Textarea from "./Textarea";
import StatisticsCard from "./StatisticsCard";
import { useMemo, useState } from "react";
import { FACEBOOK_CHAR_LIMIT, INSTAGRAM_CHAR_LIMIT } from "./constants";

export default function AppContainer() {
  const [text, setText] = useState("");

  // Optimised computations with useMemo
  const textWordCount = useMemo(() => {
    return text.trim().length > 0 ? text.trim().split(/\s+/).length : 0; //Split text using regex \s+ (one ore more spaces, tabs, newlines) to avoid empty string values.
  }, [text]);

  // Optimised computations with useMemo
  const textCharacterCount = useMemo(() => text.length, [text]);
  const instagramCharactersLeft = useMemo(
    () => INSTAGRAM_CHAR_LIMIT - textCharacterCount,
    [textCharacterCount]
  );
  const facebookCharactersLeft = useMemo(
    () => FACEBOOK_CHAR_LIMIT - textCharacterCount,
    [textCharacterCount]
  );

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <StatisticsWrapper>
        <StatisticsCard wordCount={textWordCount} label={"Words"} />
        <StatisticsCard wordCount={textCharacterCount} label={"Characters"} />
        <StatisticsCard
          wordCount={instagramCharactersLeft}
          label={"Instagram"}
          limitReached={instagramCharactersLeft < 0}
        />
        <StatisticsCard
          wordCount={facebookCharactersLeft}
          label={"Facebook"}
          limitReached={facebookCharactersLeft < 0}
        />
      </StatisticsWrapper>
    </main>
  );
}
