export default function JournalLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="space-y-2 py-4 max-w-2xl">{children}</div>
}
