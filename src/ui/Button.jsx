function Button({ children, style, onClick }) {
  return (
    <div className={style} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
