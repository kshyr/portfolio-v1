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
          <span className="text-red text-name font-semibold hover:rotate-12">
            Kostiantyn
          </span>
          <span className="text-blue text-name font-semibold"> Shyrolapov</span>
        </div>
      </div>
    </div>
  );
}
