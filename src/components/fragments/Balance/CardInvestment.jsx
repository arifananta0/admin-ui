import investment from "../../../data/invesment";
import Card from "../../elements/Card";
import { Icon } from "../../elements/Icon";

const CardInvesment = () => {
  const invesmentCard = investment.map((investment) => (
    <div key={investment.id} className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <div className="flex items-center gap-12">
          <span className="text-gray-400 font-bold">{investment.title}</span>
          <span className="text-gray-400 font-semibold ml-12">{investment.bankName}</span>
        </div>
      </div>

      {/* Account Information */}
      <div className="">
        <span className="text-xl font-bold">{investment.accountNumber}</span>
        <br />
        <span className="text-gray-500 text-sm">Account Number</span>
      </div>

      {/* Balance */}
      <div className="">
        <span className="text-xl font-bold">${investment.balance}</span>
        <br />
        <span className="text-gray-500 text-sm">Total amount</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-12">
        <button className="bg-white text-primary font-bold">Remove</button>
        <button className="flex items-center bg-primary text-white rounded-md px-4 py-2">
        <span className="mr-1">Details</span>
        <Icon.Arrowkanan />
        </button>
      </div>
    </div>
  ));

  return (
    <Card>
      <div className="flex flex-col gap-6">{invesmentCard}</div>
    </Card>
  );
};

export default CardInvesment;