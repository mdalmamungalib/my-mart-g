import FormHeader from "components/backoffice/FormHeader/FormHeader";
import NewCategoryForm from "components/backoffice/Forms/NewCategoryForm";

const NewCategory = () => {
  return (
    <div>
      <FormHeader title={"New Category"} />
      <NewCategoryForm />
    </div>
  );
};

export default NewCategory;
