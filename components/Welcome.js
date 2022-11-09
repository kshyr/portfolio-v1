export default function Welcome() {
  return (
    <div className="component-block" id="home">
      <div className="flex h-screen flex-col justify-center items-center">
        <div className="flex justify-center items-center text-reg">
          <h1 className="text-reg text-center">Hi!</h1>
          <span className="animate-wiggle">&#128075;</span>
        </div>
        <br></br> <span className="text-reg">My name is</span>
        <br></br>
        <div className="inline-block">
          <span className=" bg-gradient-to-r from-blue to-[#2b5665] text-transparent bg-clip-text text-name font-semibold">
            Kostiantyn&nbsp;
          </span>
          <span className="bg-gradient-to-r from-[#b29d36] to-red text-transparent bg-clip-text text-name font-semibold hover:rotate-12">
            Shyrolapov
          </span>
        </div>
        <div className="w-48 border-t-2 border-spacing-x-56 border-black mt-10 opacity-75"></div>
        <div className="mt-10 mb-5 ml-32 mr-32 text-center">
          <h3 class="relative text-3xl opacity-75 inline">
            frontend engineer that builds web applications with
          </h3>
          <div className="bg-black text-3xl rounded-md h-10 w-40 ml-4 translate-y-[-20%] inline-flex justify-center items-center overflow-hidden">
            <div className="font-bold text-blue before:animate-textswap relative before:absolute flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
