import Page from "@/components/Page";
import Card from "@/components/Card";
import Link from "next/link";

export default function Workspace() {
  return (
    <Page
      title="Workspace"
      description="Internal operating system for execution and collaboration."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Link href="/workspace/docs">
          <Card title="Docs" />
        </Link>

        <Link href="/workspace/chat">
          <Card title="Chat" />
        </Link>

        <Link href="/workspace/projects">
          <Card title="Projects" />
        </Link>
      </div>
    </Page>
  );
}
