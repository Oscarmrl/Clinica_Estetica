export default function Navegacion() {
  return (
    <div className="w-full bg-red-600 fixed h-28">
      <nav className="grid grid-cols-3 items-center text-white h-full px-4">
        <div>svg</div>
        <ul className="flex flex-row justify-evenly">
          <li className=" items-center">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Abaut</a>
          </li>{" "}
          <li>
            <a href="">Contac</a>
          </li>{" "}
          <li>
            <a href="">Cart</a>
          </li>
        </ul>
        <div>btn y theme</div>
      </nav>
    </div>
  );
}
