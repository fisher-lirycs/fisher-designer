import React, { useCallback } from "react";
import classNames from "classnames";

export enum AlertType {
  Success = "success",
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

export interface AlertProps {
  readonly title: string;
  readonly type?: AlertType;
  readonly descriptions?: string[];
  readonly closable?: boolean;
  readonly onClose?: (data: boolean) => void;
}

const Alert: React.FC<AlertProps> = (props) => {
  const { title, type, descriptions, closable, onClose } = props;

  const classes = classNames("fisher-alert", {
    [`fisher-alert-${type}`]: type,
  });

  const titleClass = classNames("fisher-alert-title", {
    "bold-title": descriptions,
  });

  const handleCloseAlert = useCallback(() => {
    onClose && onClose(false);
  }, [onClose]);

  return (
    <div className={classes}>
      <span className={titleClass}>{title}</span>
      {descriptions &&
        descriptions.length > 0 &&
        descriptions.map((description, i) => (
          <p key={i} className="fisher-alert-desc">
            {description}
          </p>
        ))}
      {closable && (
        <span className="fisher-alert-close" onClick={handleCloseAlert}>
          x
        </span>
      )}
    </div>
  );
};

Alert.defaultProps = {
  type: AlertType.Default,
  closable: true,
};

export default Alert;
