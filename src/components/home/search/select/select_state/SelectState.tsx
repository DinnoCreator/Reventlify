const SelectState = ({
  stateParser,
}: {
  stateParser: (value: string) => void;
}) => {
  return (
    <select
      className="customizedInput opacity-50"
      onChange={(e) => stateParser(e.target.value)}
    >
      <option>ABUJA FCT</option>
      <option>ABIA</option>
      <option>ADAMAWA</option>
      <option>AKWA-IBOM</option>
      <option>ANAMBRA</option>
      <option>BAUCHI</option>
      <option>BAYELSA</option>
      <option>BENUE</option>
      <option>BORNO</option>
      <option selected>CROSS-RIVER</option>
      <option>DELTA</option>
      <option>EBONYI</option>
      <option>EDO</option>
      <option>EKITI</option>
      <option>ENUGU</option>
      <option>GOMBE</option>
      <option>IMO</option>
      <option>JIGAWA</option>
      <option>KADUNA</option>
      <option>KANO</option>
      <option>KATSINA</option>
      <option>KEBBI</option>
      <option>KOGI</option>
      <option>KWARA</option>
      <option>LAGOS</option>
      <option>NASSARAWA</option>
      <option>NIGER</option>
      <option>OGUN</option>
      <option>ONDO</option>
      <option>OSUN</option>
      <option>OYO</option>
      <option>PLATEAU</option>
      <option>RIVERS</option>
      <option>SOKOTO</option>
      <option>TARABA</option>
      <option>YOBE</option>
      <option>ZAMFARA</option>
    </select>
  );
};

export default SelectState;
