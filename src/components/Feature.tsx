interface Props {
  title: string;
  description: string;
}

export default function Feature({ title, description }: Props) {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
      {/*<img
        alt=""
        src="https://source.unsplash.com/75x75/?portrait"
        className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start"
        />*/}
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-xs text-justify">{description}</p>
      </div>
    </div>
  );
}
