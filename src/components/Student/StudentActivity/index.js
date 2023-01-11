import "./index.css";

import { RiDeleteBinLine } from "react-icons/ri";

const StudentActivity = (props) => {
  const { activityList, removeItem } = props;

  return (
    <div>
      {activityList === null || activityList.length === 0 ? (
        <div className="no-data-found-card">
          <img
            src="https://res.cloudinary.com/dy0mnmvem/image/upload/v1668150687/Movie-app-react-js/Background-Completesm-something_went_wrong_rscenm.png"
            className="no-data-image"
          />
          <h1 className="no-data-content-heading">No Data Found</h1>
          <p className="no-data-content-description">
            Provide the values and make the calculation
          </p>
        </div>
      ) : (
        <ul className="student-activity-list">
          {activityList.map((item) => (
            <li className="student-activity-card" key={item.id}>
              <p className="student-activity-content">
                {item.num1} {item.method} {item.num2} = {item.solution}
              </p>
              <RiDeleteBinLine
                size={20}
                color="#ffffff"
                className="delete-icon"
                onClick={() => removeItem(item.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentActivity;
