import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <Container>
      <div className="py-32 text-center">
        <h1 className="text-5xl font-semibold mb-6">
          A Unified Digital Ecosystem
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          FreedomLabs builds structured, scalable platforms across property,
          infrastructure, and digital operations.
        </p>

        <Button href="/ventures">Explore Ventures</Button>
      </div>
    </Container>
  );
}
