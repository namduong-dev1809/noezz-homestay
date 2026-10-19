export default function PageTitle({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="rise-in py-14 sm:py-20">
      <h1 className="font-display uppercase text-5xl sm:text-7xl">{title}</h1>
      <div className="mt-4 h-1 w-12 rounded bg-coral" />
      <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
    </div>
  );
}
