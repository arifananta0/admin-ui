import React from 'react';
import { expensesStatistics } from '../../../data/expenses';
import Card from '../../elements/Card';
import BarsDataset from '../../elements/BarChart';

const CardStatistic = () => {
    // const expensesStatisticCard = expensesStatistics.map((expensesStatistic) => 
    //     (<div key={expensesStatistic.id}>{expensesStatistic.date}</div>));

  return (
    <Card 
    variant="md:col-span-2 min-h-max" 
    title="Statistics" 
    // desc={expensesStatisticCard} 
    >
        <div className="h-72">
            <select className="font-bold text-lg ring-0 
            focus:outline-none bg-transparent">
                <option>Weekly Comparison</option>
            </select>
            <BarsDataset desc={expensesStatistics} />
        </div>
    </Card>
  );
};

export default CardStatistic;