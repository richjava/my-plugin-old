import { DataView } from "@/components/plugins/richjava-my-plugin/shared/data-view/data-view";
export default function Cover1({ content }: any) {
  if (!content) return <></>;
  return (
    <section id="cover-1" className="container template">
      <DataView sectionName="Cover1" content={content} />
    </section>
  );
}
