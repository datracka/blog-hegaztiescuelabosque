import Alert from "./alert";

type LayoutProps = {
  preview: boolean;
  currentSlug: string;
  children: React.ReactNode;
}

export default function Layout({ preview, currentSlug, children }: LayoutProps) {
  return (
    <>
      <Alert preview={preview} currentSlug={currentSlug} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  );
}
