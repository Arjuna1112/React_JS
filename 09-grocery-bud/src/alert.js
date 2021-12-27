import { useEffect } from "react";

const Alert = ({ msg, type, removeAlert, items }) => {
  useEffect(() => {
    const timeout = setTimeout(() => removeAlert(), 3000);
    return () => clearTimeout(timeout);
  }, [items]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
