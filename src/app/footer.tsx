export default function Footer() {
  return (
    <footer className="text-muted flex justify-between gap-6 py-4 print:hidden">
      &copy; {new Date().getFullYear()} Kris McGinnes
    </footer>
  )
}
