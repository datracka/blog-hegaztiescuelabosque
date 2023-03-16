import { StructuredText, Image, type RenderBlockContext, StructuredTextGraphQlResponseRecord } from "react-datocms";

type PostBodyProps = {
    content: any; // fix this with a validation library like zod
}

type R = StructuredTextGraphQlResponseRecord & {image: { responsiveImage: any}}

export default function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }: RenderBlockContext<R>) => {
            if (record.__typename === "ImageBlockRecord") {
              return <Image lazyLoad={false} data={record.image.responsiveImage} />;
            }

            return (
              <>
                <p>Don't know how to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
