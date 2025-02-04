import Card from "../../elements/Card";

const CardAdd = () => {
  return (
    <Card>
      <div className="h-full flex flex-col items-center justify-center space-y-2 mt-20">
        <button className="bg-primary text-white font-bold py-2 px-11 rounded">
          Add Accounts
        </button>
        <button className="text-gray-400 font-medium py-2">
          Edit Accounts
        </button>
      </div>
    </Card>
  );
};

export default CardAdd;