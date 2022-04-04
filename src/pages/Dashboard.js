import React from 'react';
import LineBarAreaComposedChart from '../components/Chart/LineBarAreaComposedChart';
import SynchronizedAreaChart from '../components/Chart/SynchronizedAreaChart';
import TwoLevelPieChart from '../components/Chart/TwoLevelPieChart';
import VerticalComposedChart from '../components/Chart/VerticalComposedChart';

const Dashboard = () => {
    return (
        <div className='grid lg:grid-cols-2 container items-center justify-center mx-auto grid-cols-1'>
          <LineBarAreaComposedChart />
          <SynchronizedAreaChart />
          <TwoLevelPieChart />
          <VerticalComposedChart />
        </div>
    );
};

export default Dashboard;