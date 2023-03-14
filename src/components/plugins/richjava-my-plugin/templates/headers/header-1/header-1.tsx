import { DataView } from "@/components/plugins/richjava-my-plugin/shared/data-view/data-view";
import { Intro } from "@/components/plugins/richjava-my-plugin/shared/intro/intro";

export default function Header1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="header-1" className="container template">
      <Intro type="plugin" content={content} />
      <DataView sectionName="Header1" content={content} />
    </section>
  );
}
