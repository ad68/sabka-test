import ReactPlayer from "react-player";


export default function CustomVideoPlayer({ url }: { url: string }) {

    return <ReactPlayer className="w-[1200px]" width="100%" height={"100%"} controls={true} autoPlay={true} src={url} />;
}