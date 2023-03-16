
type HeaderBlogProps = {
    preview: boolean
}

export default function HeaderBlog({ preview }: HeaderBlogProps) {
    const hrefLink = preview ? "/preview" : "/";
    return (
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
        <a href={hrefLink} className="hover:underline">
          Blog
        </a>
      </h2>
    );
  }
  