import { useState } from "react";
import ReactDOM from "react-dom";
import MultiSelect, { IOption } from "./MultiSelect";

const options = [
  { value: 0, label: "Goranboy" },
  { value: 1, label: "Safikurd" },
  { value: 2, label: "Baku" },
  { value: 3, label: "Ganja" },
  { value: 4, label: "Shusha" },
  { value: 5, label: "Agdam" },
];

export default function ReactMultiSelect() {
  const [optionSelected, setSelected] = useState<IOption[] | null>();
  const handleChange = (selected: IOption[]) => {
    setSelected(selected);
  };

  return (
    <div>
      <h1> MultiSelect example </h1>
      <MultiSelect
        key="example_id"
        options={options}
        onChange={handleChange}
        value={optionSelected}
        isSelectAll={true}
        menuPlacement={"bottom"}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ReactMultiSelect />, rootElement);
