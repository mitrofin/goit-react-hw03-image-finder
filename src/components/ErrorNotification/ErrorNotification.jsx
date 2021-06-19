import errorImage from '../ErrorNotification/nothing-found.png';

export default function ErrorNotification({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="540" alt="sadmagnifier" />
      <p>{message}</p>
    </div>
  );
}