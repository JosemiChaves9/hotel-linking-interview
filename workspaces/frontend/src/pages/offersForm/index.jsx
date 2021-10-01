import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/ApiService';
export const OffersForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ offerName }) => {
    ApiService.newOffer(offerName).then((res) => console.log(res));
  };
  return (
    <form className='w-25 m-auto mt-3' onSubmit={handleSubmit(onSubmit)}>
      <div class='form-outline mb-4'>
        <label class='form-label'>Offer name </label>
        <input type='text' class='form-control' {...register('offerName')} />
      </div>
      <button type='submit' class='btn btn-primary btn-block'>
        Add
      </button>
    </form>
  );
};
