import PropTypes from "prop-types";

function ButtonPrimary({ href, target = "_self", label, icon, classes }) {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary" + classes}>
        {label}
      </a>
    );
  }
  return <div> Button </div>;
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export default ButtonPrimary;
