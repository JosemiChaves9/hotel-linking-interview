export const Error = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-md-12 col-sm-12'>
        <div className='card2 shadow-lg border-0 rounded-lg mt-5 mx-auto w-50 py-3'>
          <h3 className='card-header2 display-1 text-muted text-center'>
            Server error
          </h3>

          <span className='card-subtitle mb-2 text-muted text-center my-5'>
            The server experienced an error, nothing we can do right now
          </span>
        </div>
      </div>
    </div>
  );
};
