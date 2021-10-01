import './index.scss';

export const Alert = ({ message }) => {
  return (
    <div className='alert'>
      <p>{message}</p>
    </div>
  );
};
