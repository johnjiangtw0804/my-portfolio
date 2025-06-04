function ButtonPrimary({ href, target = "_self", label, icon, classes = "" }) {
  const className = `btn btn-primary ${classes}`;

  if (href) {
    return (
      <a href={href} target={target} className={className}>
        {label}
        {icon && (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={className}>
        {label}
        {icon ? (
          <span className="material-symbols-outlined" aria-hidden="true">
            {icon}
          </span>
        ) : (
          { icon }
        )}
      </button>
    );
  }
}

export default ButtonPrimary;
