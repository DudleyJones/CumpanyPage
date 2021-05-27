import "./feedbackitem.css";

export default function FeedbackItem(props) {
  return (
    <div className="feedback__window">
      <table>
        <tbody>
          <tr>
            <td>
              <p>{props.author}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.date}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{props.feedback}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
