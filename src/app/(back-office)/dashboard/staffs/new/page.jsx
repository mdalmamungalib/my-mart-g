import FormHeader from "components/backoffice/FormHeader/FormHeader";
import StaffForm from "components/backoffice/Forms/StaffForm";


const NewStaff = () => {
 
  return (
    <div>
      <FormHeader title={"New Staff"} />
      <StaffForm />
    </div>
  );
};

export default NewStaff;
