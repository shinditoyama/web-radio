export default function Album() {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="relative w-60 h-52 block rounded-lg border-4 border-black bg-white">
        <span className="absolute inset-0 -z-10 -translate-x-2 translate-y-2 rounded-lg bg-white ring-4 ring-black"></span>
        <div className="p-4 sm:p-6 lg:p-8">
          {/*<p className="text-lg font-bold text-zinc-800">Alert Components</p>
          <p className="mt-1 font-mono text-xs text-zinc-800">7 Components</p>*/}
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl text-white font-semibold">band</h2>
        <p className="text-lg font-thin text-white">music</p>

        <button className="button">
          {/*playing ? <BsPlayFill /> : <BsFillPauseFill />*/}
        </button>
      </div>
    </div>
  );
}
