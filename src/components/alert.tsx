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
              Esta página muestra contenido no publicado.{" "}
              <a
                href={currentSlug}
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                click aqui
              </a>{" "}
              para salir del modo de prevista.
            </>
          ) : (
            <>
              Esta página muestra contenido público.{" "}
              <a
                href={`/preview/${currentSlug}`}
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                click aqui
              </a>{" "}
              para entrar en modo de prevista!
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
