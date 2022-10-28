import Spinner from "react-bootstrap/Spinner";
const SuspenseLoading = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
      }}
    >
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
};
export default SuspenseLoading;
