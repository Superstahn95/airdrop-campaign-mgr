interface DeleteModalProps {
  id: string;
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function DeleteModal({ id, handleModal }: DeleteModalProps) {
  const handleDelete = () => {
    console.log(id);
  };

  return (
    <>
      <div
        className=" absolute top-0 left-0 bg-black/40 text-white w-screen h-screen"
        onClick={() => handleModal(false)}
      />
      <div className="absolute top-1/2 left-1/2 bg-white rounded-xl w-[300px] h-[200px] -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col items-center justify-center space-y-4 font-montserrat">
        <p className="text-xl text-center">
          Are you sure you want to delete this campaign?
        </p>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => handleModal(false)}
            className="bg-blue-500 rounded-md w-[100px]  p-2 text-white"
          >
            No
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 rounded-md w-[100px] p-2 text-white"
          >
            Yes
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
