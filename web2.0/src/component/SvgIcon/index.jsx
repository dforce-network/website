import React from "react";
import PropTypes from "prop-types";
import styles from "./style.scss";

const SvgIcon = (props) => {
  const { iconClass, fill, className } = props;

  return (
    <i aria-hidden="true">
      <svg className={className}>
        <use xlinkHref={"#" + iconClass} fill={fill} />
      </svg>
      {props.children}
    </i>
  );
};

SvgIcon.propTypes = {
  // svg名字
  iconClass: PropTypes.string.isRequired,
  // 填充颜色
  fill: PropTypes.string,
  // className
  className: PropTypes.string,
};

SvgIcon.defaultProps = {
  fill: "currentColor",
};

export default SvgIcon;
