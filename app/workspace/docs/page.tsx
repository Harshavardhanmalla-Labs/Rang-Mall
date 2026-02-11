import Page from "@/components/Page";
import Card from "@/components/Card";

export default function DocsPage() {
  return (
    <Page title="Docs" description="Internal documentation system.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Card
          title="Project Documentation"
          description="Structured internal documentation."
        />

        <Card
          title="Technical Notes"
          description="Architecture and engineering notes."
        />
      </div>
    </Page>
  );
}
