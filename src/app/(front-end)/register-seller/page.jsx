import RegisterForm from "components/frontend/RegisterForm/RegisterForm";

export default function RegisterSeller() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow-2xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
          Create a Seller Account
        </h1>

        <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
          Join as a seller and start listing your products.
        </p>
            <RegisterForm role={"SELLER"}/>
          </div>
        </div>
      </div>
    </section>
  );
}