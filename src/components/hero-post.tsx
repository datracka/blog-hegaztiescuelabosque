import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import type { AuthorProps } from "../common";

type Props = {
    title: string;
    coverImage: any;
    date: string;
    excerpt: string;
    author: AuthorProps,
    slug: string;
    preview: boolean;
}
export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  preview
}: Props) {
  const hrefLink = preview ? `/preview/posts/${slug}` : `/posts/${slug}`;
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <a href={hrefLink} className="hover:underline">
              {title}
            </a>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
