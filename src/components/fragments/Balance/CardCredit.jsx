import credits from "../../../data/credits";
import Card from "../../elements/Card";
import { Icon } from "../../elements/Icon";

const CardCredit = () => {
  const creditCard = credits.map((credit) => (
    <div key={credit.id} className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-gray-400 font-bold">{credit.title}</span>
          <span className="text-gray-400 text-sm ml-12">{credit.accountType}</span>
        </div>
        <img className="h-10" src={`/images/${credit.logo}`} alt={credit.title} />
      </div>

      {/* Account Information */}
      <div className="">
        <span className="text-xl font-bold">{credit.accountNumber}</span>
        <br />
        <span className="text-gray-500 text-sm">Account Number</span>
      </div>

      {/* Balance */}
      <div className="">
        <span className="text-xl font-bold">${credit.balance}</span>
        <br />
        <span className="text-gray-500 text-sm">Total amount</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-9">
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
      <div className="flex flex-col gap-6">{creditCard}</div>
    </Card>
  );
};

export default CardCredit;