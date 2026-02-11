export default function Page({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen pt-32 pb-32">
      <h1 className="text-5xl font-medium tracking-tight">{title}</h1>

      {description && (
        <p className="mt-4 text-base text-[#9AA4BF] max-w-2xl">{description}</p>
      )}

      <div className="mt-20">{children}</div>
    </main>
  );
}
