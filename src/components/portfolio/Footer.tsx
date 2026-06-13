export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Aswin Srinivasan</p>
      </div>
    </footer>
  );
}