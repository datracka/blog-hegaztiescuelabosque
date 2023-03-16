import Avatar from "./avatar";
import Date, { DateProps } from "./date";
import CoverImage, {CoverImagesProps } from "./cover-image";
import PostTitle, { PostTitleProps} from "./post-title";
import type { AuthorProps } from "../common";

type PostHeaderProps = {
    title: string;
    coverImage: CoverImagesProps;
    date: DateProps;
    author: AuthorProps;
}

export default function PostHeader({ title, coverImage, date, author }: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
}
