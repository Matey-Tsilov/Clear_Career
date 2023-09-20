
import React, {useState, useMemo} from "react";
import anonym from "../../../assets/anonym.jpg";

export const ImageInput = ({ imageAttributes, inputAttributes }) => {
  const [img, setImg] = useState(anonym)

  const onChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setImg(file)
    }

  const image = useMemo(() => React.createElement("img", { ...imageAttributes, src: img }), [imageAttributes, img])
  // eslint-disable-next-line
  const input = useMemo(() => React.createElement("input", { ...inputAttributes, onChange }), [inputAttributes])
  
  return (
    <>
      {image}
      {input}
    </>
  );
};
