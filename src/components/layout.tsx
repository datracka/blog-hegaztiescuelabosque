import Alert from "./alert";
import Footer from "./footer";

type Props = {
  preview: boolean;
  currentSlug: string;
  children: React.ReactNode;
}

export default function Layout({ preview, currentSlug, children }: Props) {
  return (
    <>
      <Alert preview={preview} currentSlug={currentSlug} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
