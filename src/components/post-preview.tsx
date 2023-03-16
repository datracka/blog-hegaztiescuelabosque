import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";

export type PostPreviewProps = {
    title: string;
    coverImage: {
        responsiveImage: {
        };
    };
    date: string;
    excerpt: string;
    author: {
        name: string;
        picture: string;
    };
    slug: string;
    preview: boolean;
};

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  preview
}: PostPreviewProps) {
  const hrefLink = preview ? `/preview/posts/${slug}` : `/posts/${slug}`;
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <a href={hrefLink} className="hover:underline">
          {title}
        </a>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
