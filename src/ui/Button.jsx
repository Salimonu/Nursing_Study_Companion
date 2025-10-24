function Button({ children, style, onclick }) {
  return (
    <div className={style} onClick={onclick}>
      {children}
    </div>
  );
}

export default Button;
