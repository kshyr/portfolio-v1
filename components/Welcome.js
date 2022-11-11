export default function Welcome() {
  return (
    <div className="component-block" id="home">
      <div className="flex h-screen flex-col justify-center items-center">
        <h3 className="text-reg">Hi!</h3>
        <br></br>
        <span className="text-reg mb-2 md:mb-3 lg:mb-4 xl:mb-6">
          My name is
        </span>
        <div className="inline-block relative lg:h-12 xl:h-14 shine-wrapper">
          <span className="bg-gradient-to-r from-blue to-[#2b5665] text-transparent bg-clip-text text-name font-semibold">
            Kostiantyn&nbsp;
          </span>
          <br className="sm:hidden"></br>
          <span className="bg-gradient-to-r from-[#b29d36] to-red text-transparent bg-clip-text text-name font-semibold hover:rotate-12">
            Shyrolapov
          </span>
        </div>
        <div className="w-32 md:w-36 lg:w-40 xl:w-48 border-t sm:border-t-[1.5px] lg:border-t-2 border-spacing-x-56 border-black my-6 sm:my-7 md:my-8 lg:my-9 xl:my-10 opacity-75"></div>
        <div className="mx-16 md:mx-32 text-center text-reg">
          <h3 className="relative opacity-75 inline">
            <span className="text-red">Frontend engineer </span>
            that builds web applications with&nbsp;
          </h3>
          <div className="bg-black rounded-md h-[1.6rem] w-20 md:h-8 lg:h-9 xl:h-10 md:w-24 lg:w-32 xl:w-40 translate-y-[-25%] inline-flex justify-center items-center overflow-hidden">
            <div className="font-bold text-blue text-alt before:animate-textswap relative before:absolute flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
