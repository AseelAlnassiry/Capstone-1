const YuCard = () => {
  return (
    <article className="group relative z-10 flex flex-col items-center gap-5 rounded-lg bg-pink-200 px-4 py-10 text-accent shadow-lg ">
      {/* Picture */}
      <img src="yuchan.jpg" alt="" className="rounded-lg shadow" />
      <h2 className="card-title text-3xl font-bold">能村　悠!</h2>

      <p className="px-2 text-xl font-semibold">
        君は私の幸せですよ、本当にね。 心の奥からお付き合いできて光栄です！
      </p>
      <p className="px-2 text-xl font-semibold">
        I can't wait to spend more time with you, now and forever :)
      </p>
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />

        <div className="swap-on">😘</div>
        <div className="swap-off">🥰</div>
      </label>
    </article>
  );
};
export default YuCard;
