import RegisterForm from "components/frontend/RegisterForm/RegisterForm";

export default function Register() {
  return (
  
    
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 ">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create an Account
        </h2>

        <RegisterForm role={"USER"} />
      </div>
    </div>
  );
}
