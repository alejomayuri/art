import ObraDescription from "./components/Description";
import ObraHeader from "./components/Header";
import ObraDisplay from "./components/ObraDisplay";

export default function Obra() {
    return (
      <>
        <ObraHeader name = {'MITOSIS'} sub = {'Arte vivo, vibración, color'} />
        <ObraDescription
          text = {'El mundo se sostiene en el movimiento, en la multiplicación y en el libre albedrío. Las partículas cuánticas con posición y movimiento indefinido gobiernan el mundo macroscópico a través de sus leyes aleatorias. Esta obra engloba esos conceptos. La naturaleza fundamental del albedrio aleatorio del click genera un patrón fractal que parece latir. Que gobierna su mundo con el color vibrante de la naturaleza. Que exhibe con orgullo la naturaleza del movimiento y que, en consecuencia, vive.'}
        />
        <ObraDisplay url = {'https://comfy-alfajores-c60263.netlify.app/'} />
      </>
    );
  }