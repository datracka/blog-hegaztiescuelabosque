import { Image } from "react-datocms";

type Props = {
    name: string;
    picture: any;
}

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image
          lazyLoad={false}
          alt={name}
          data={picture.responsiveImage}
          className="rounded-full"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
