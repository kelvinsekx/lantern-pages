export function TryThis({ text }: { text: string }) {
  return (
    <section className="px-5 py-2.5 my-2 rounded-3xl text-green-450 items-center space-y-4">
      <header className="border-4 text-2xl bg-green-450 text-muted-0 w-5/6">
        Try This
      </header>
      <span>{text}</span>
    </section>
  );
}
