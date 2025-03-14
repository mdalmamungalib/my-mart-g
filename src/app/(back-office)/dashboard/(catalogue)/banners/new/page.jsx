import FormHeader from "components/backoffice/FormHeader/FormHeader";
import BannerForm from "components/backoffice/Forms/BannerForm";

const NewBanner = () => {
  return (
    <div>
      <FormHeader title={"New Banner"} />
      <BannerForm />
    </div>
  );
};

export default NewBanner;
