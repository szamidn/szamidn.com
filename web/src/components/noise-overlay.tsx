export function NoiseOverlay() {
  return (
    <div
      className="fixed h-[100dvh] mix-blend-soft-light inset-0 pointer-events-none bg-[url('/noise.svg')] opacity-20 z-50"
      aria-hidden="true"
    />
  );
}
