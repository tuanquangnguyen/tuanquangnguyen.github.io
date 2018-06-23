const InputButton = props => (
  <ReactMD.Button
    {...props}
    className="react-calc-btn react-calc__input-btn"
    flat
    type="button"
  >
    {props.children || props.value}
  </ReactMD.Button>
);
