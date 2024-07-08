import Feed from "../components/Feed.";

export function PagesFeed() {
  return (
    <div>
      <Feed
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNBYBaKYAqk6Wb3JaN4nLNyRIk_AADTE8vw&s"
        title="Hola Mundo"
        detail="Todas las noticias sobre el desarrollo tecnológico en un solo lugar Hola Mundo"
        color="red"
      ></Feed>

      <Feed
        img="https://www.noticias.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F22.8fcbc1a1.webp&w=828&q=75"
        title="Microsoft supera a Apple, el lenguaje del año y la pesadilla de las Cookies"
        detail="🏆 Microsoft SUPERA a APPLE en capitalización del mercado💻 El lenguaje del año según TIOBE es... C# "
        color="blue"
      ></Feed>
    </div>
  );
}
