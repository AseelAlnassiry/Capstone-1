const ErrorModal = ({ msg }) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        defaultChecked
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Error!</h3>
          <p className="py-4">{msg}</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};
export default ErrorModal;
