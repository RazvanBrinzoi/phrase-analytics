import StatisticsWrapper from "./StatisticsWrapper";
import Textarea from "./Textarea";
import StatisticsCard from "./StatisticsCard";
import { useMemo, useState } from "react";

export default function AppContainer() {
  const [text, setText] = useState("");

  // Optimised computations with useMemo
  const textWordCount = useMemo(() => {
    return text.trim().length > 0 ? text.trim().split(/\s+/).length : 0; //Împarte textul folosind regex-ul \s+ (una sau mai multe spații, taburi, newline). Pentru a evita cuvinte goale
  }, [text]);

  // Optimised computations with useMemo
  const textCharacterCount = useMemo(() => text.length, [text]);

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <StatisticsWrapper>
        <StatisticsCard wordCount={textWordCount} label={"Words"} />
        <StatisticsCard wordCount={textCharacterCount} label={"Characters"} />
        <StatisticsCard wordCount={280} label={"Instagram"} />
        <StatisticsCard wordCount={2200} label={"Facebook"} />
      </StatisticsWrapper>
    </main>
  );
}
