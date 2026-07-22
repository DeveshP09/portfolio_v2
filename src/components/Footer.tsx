export function Footer() {
  return (
    <footer className="pt-12 pb-8 text-xs text-muted-foreground">
      <div className="flex items-center justify-between">
        <span>© {new Date().getFullYear()} your name</span>
        <span>built with care.</span>
      </div>
    </footer>
  );
}
