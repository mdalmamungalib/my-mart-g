import FormHeader from "components/backoffice/FormHeader/FormHeader";
import NewSellerForm from "components/backoffice/NewSellerForm/NewSellerForm";


const NewSeller = async () => {
  
  return (
    <div className="">
      <FormHeader title={"New Seller"} />
      <NewSellerForm />
    </div>
  );
};

export default NewSeller;
