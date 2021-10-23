import { useState } from "react";
import ReactDOM from "react-dom";
import MultiSelect, { Option } from "./MultiSelect";
import "./styles.css";

const options = [
  { value: 0, label: "Goranboy" },
  { value: 1, label: "Safikurd" },
  { value: 2, label: "Baku" },
  { value: 3, label: "Ganja" },
  { value: 4, label: "Shusha" },
  { value: 5, label: "Agdam" },
];

export default function ReactMultiSelect() {
  const [optionSelected, setSelected] = useState<Option[] | null>();
  const handleChange = (selected: Option[]) => {
    setSelected(selected);
  };

  return (
    <div className="App">
      <h1>
        {"\u2728"} MultiSelect example {"\u2728"}
      </h1>
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
