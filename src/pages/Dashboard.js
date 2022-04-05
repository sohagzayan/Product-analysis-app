import React from 'react';
import ComposedChart from '../components/Chart/ComposedChart';
import LegendChart from '../components/Chart/LegendChart';
import SynchronizedAreaChart from '../components/Chart/SynchronizedAreaChart';
const Dashboard = () => {
    return (
        <div className='wrapperChart   flex flex-col items-center justify-center '>
          <SynchronizedAreaChart />
          <ComposedChart />
          <LegendChart />
        </div>
    );
};

export default Dashboard;