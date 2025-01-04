export default function HeaderLessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-[calc(100dvh)]">{children}</div>;
}
