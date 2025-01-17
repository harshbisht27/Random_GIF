import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const API_KEY = process.env.gif_app;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   console.log(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl mt-[15px] uppercase underline font-bold">Random Gif</h1>
      {loading ? <Spinner /> : <img src={gif} width="450" />}
      <button
        onClick={() => fetchData()}
        className="w-10/12 bg-white text-lg py-2 mb-[20px] rounded-lg font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
