const CarouselCard = ({ card, size, titleStyle }) => {
  return (
    <div
      className="group relative overflow-hidden bg-neutral-200 rounded-xl"
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p
          className={`bg-gradient-to-br from-white/20 to-white/0 p-8 
          text-white text-6xl font-black uppercase backdrop-blur-lg ${titleStyle}`}
        >
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default CarouselCard;
