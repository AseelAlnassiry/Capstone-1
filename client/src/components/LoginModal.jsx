import LoginForm from './LoginForm';

const LoginModal = ({ user }) => {
  return (
    <>
      {!user && (
        <>
          <dialog id="login_modal" className="modal">
            <div method="dialog" className="modal-box p-0">
              <LoginForm />
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
export default LoginModal;
