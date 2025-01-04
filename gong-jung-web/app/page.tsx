import Footer from "./_components/footer";
import Header from "./_components/header";
import ImageDownloadButton from "./_components/image-download-button";
import Landing from "./_components/landing";

export default function Home() {
  return (
    <>
      <main className={`max-w-[1200px] w-full h-[calc(100dvh)] px-4`}>
        <Header />

        <Landing />

        <Footer />
      </main>
    </>
  );
}
