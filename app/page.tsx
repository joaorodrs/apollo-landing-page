export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="size-20 rounded-full bg-background" />
      <div className="size-20 rounded-full bg-foreground" />
      <div className="size-20 rounded-full bg-primary" />
      <div className="size-20 rounded-full bg-primary-foreground" />
      <div className="size-20 rounded-full bg-secondary" />
      <div className="size-20 rounded-full bg-secondary-foreground" />
      <div className="size-20 rounded-full bg-accent" />
      <div className="size-20 rounded-full bg-accent-foreground" />
    </main>
  );
}
