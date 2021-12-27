const Refresh = ({ refreshTour }) => {
  return (
    <>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={() => refreshTour()}>
          refresh
        </button>
      </div>
    </>
  );
};

export default Refresh;
