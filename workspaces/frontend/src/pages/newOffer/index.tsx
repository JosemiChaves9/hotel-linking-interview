import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/ApiService';

export const NewOffer = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ offerName }: { offerName: string }) => {
    ApiService.newOffer(offerName);
  };
  return (
    <form className='w-25 m-auto mt-3' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-outline mb-4'>
        <label className='form-label'>Offer name </label>
        <input
          type='text'
          className='form-control'
          {...register('offerName')}
        />
      </div>
      <button type='submit' className='btn btn-primary btn-block'>
        Add
      </button>
    </form>
  );
};
