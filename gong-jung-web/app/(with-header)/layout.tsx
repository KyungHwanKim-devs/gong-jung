import Footer from "../_components/footer";
import Header from "../_components/header";

export default function withHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`w-full h-[calc(100dvh)]`}>
      <Header />
      {children}
    </div>
  );
}
