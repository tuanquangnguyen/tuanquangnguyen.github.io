const Display = ({
  angleMode,
  component,
  expression,
  history,
  onAngleModeChange,
  result,
  ...props
}) => {
  let Component = component || ReactMD.Paper || 'div';

  return (
    <Component
      {...props}
      className="react-calc-display utils-clearfix"
    >
      <ReactMD.Toolbar
        actions={(
          <ReactMD.MenuButton
            icon
            menuItems={['History', 'About', 'Send feedback']}
          >
            more_vert
          </ReactMD.MenuButton>
        )}
        className="react-calc-display__appbar"
        titleMenu={(
          <ReactMD.SelectField
            id="angle-mode"
            menuItems={['DEG', 'RAD', 'GRA']}
            name="angle-mode"
            onChange={onAngleModeChange}
            value={angleMode}
          />
        )}
      />
      <div className="react-calc__expression">
        {expression}
      </div>
      <div className="react-calc__result">
        {result}
      </div>
    </Component>
  );
};
