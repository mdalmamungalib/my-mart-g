import FormHeader from "components/backoffice/FormHeader/FormHeader";
import SellerForm from "components/backoffice/Forms/SellerForm";
import { getData } from "lib/getData";


const NewSeller = async ({params: {id}}) => {
  const user = await getData(`/users/${id}`);
  return (
    <div className="">
      <FormHeader title={"New Seller"} />
      <SellerForm user={user}/>
    </div>
  );
};

export default NewSeller;
