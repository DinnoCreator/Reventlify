import background from "../../../images/background.jpg";
import { jsxComponent } from "../../../interfaces/general";

const Background = ({ children }: { children?: jsxComponent }) => {
  return (
    <main
      className="text-white bg-cover bg-no-repeat bg-center md:py-6"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </main>
  );
};

export default Background;
