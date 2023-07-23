import RegisterForm from "./RegisterForm";

const RegisterModal = ({ user }) => {
  return (
    <>
      {!user && (
        <>
          <dialog id="register_modal" className="modal">
            <div method="dialog" className="modal-box p-0">
              <RegisterForm />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </>
      )}
    </>
  );
};
export default RegisterModal;
