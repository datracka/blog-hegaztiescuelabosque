import Container from "./container";
import cn from "classnames";

type Props = {
  preview: boolean;
  currentSlug: string;
}

export default function Alert({ preview, currentSlug }: Props) {

  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{" "}
              <a
                href={currentSlug}
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              This is page is showing published content.{" "}
              <a
                href={`/preview/${currentSlug}`}
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to enter preview mode!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
