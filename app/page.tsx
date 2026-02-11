import Page from "@/components/Page";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <Page
      title="Rang & Mall"
      description="An operating company building and owning systems across infrastructure, AI, and consumer platforms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Link href="https://isdwell.com">
          <Card title="Dwell USA" description="Multifamily leasing platform" />
        </Link>

        <Link href="https://isdwell.in">
          <Card
            title="Dwell India"
            description="Owner-first property network"
          />
        </Link>

        <Link href="https://builderstudio.freedomlabs.in">
          <Card
            title="Builder Studio"
            description="Construction & contractor platform"
          />
        </Link>

        <Link href="https://forge.freedomlabs.in">
          <Card
            title="FreedomLabs Forge"
            description="Execution & project engine"
          />
        </Link>
      </div>
    </Page>
  );
}
