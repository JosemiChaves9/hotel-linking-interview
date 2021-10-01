import { useForm } from 'react-hook-form';
import { ApiService } from '../../services/ApiService';

export const OffersForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ offerName }) => {
    ApiService.newOffer(offerName).then((res) => console.log(res));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' {...register('offerName')} />
      <button>Send</button>
    </form>
  );
};
