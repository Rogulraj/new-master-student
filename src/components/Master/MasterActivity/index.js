import "./index.css";

const MasterActivity = () => {
  let activityList = localStorage.getItem("activities");

  if (activityList !== null) {
    activityList = JSON.parse(activityList);
  }

  return (
    <div>
      {activityList === null || activityList.length === 0 ? (
        <div className="master-no-data-found-card">
          <img
            src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1668150687/Movie-app-react-js/Background-Completesm-something_went_wrong_rscenm.png"
            className="master-no-data-image"
          />
          <h1 className="master-no-data-content-heading">No Activity</h1>
          <p className="master-no-data-content-description">
            Enter the values and make the calculation
          </p>
        </div>
      ) : (
        <ul className="master-activity-list">
          {activityList.map((item) => (
            <li className="master-activity-card" key={item.id}>
              <p className="master-activity-content">
                {item.num1} {item.method} {item.num2} = {item.solution}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MasterActivity;
