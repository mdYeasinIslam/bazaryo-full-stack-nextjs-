'use client'
import React from 'react';
import { TrendingUp, TrendingDown, CheckCircle, Clock, XCircle } from 'lucide-react';
import { cn } from '@lib/utils';

// Fixed layout configuration - never changes
const layoutConfig = {
  1: 'row-span-2',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-3',
  5: 'col-span-2',
};

// Function to swap data between two card positions
const getSwappedData = (data, swap1, swap2) => {
  const swappedData = [...data];

  const index1 = swappedData.findIndex((item) => item.id === swap1);
  const index2 = swappedData.findIndex((item) => item.id === swap2);

  if (index1 !== -1 && index2 !== -1) {
    // Swap the data
    [swappedData[index1], swappedData[index2]] = [swappedData[index2], swappedData[index1]];

    // Keep their original ids for layout
    swappedData[index1].id = swap1;
    swappedData[index2].id = swap2;
  }

  return swappedData;
};

const StatCard = ({
  icon: Icon,
  id,
  actualPosition,
  title,
  mainValue,
  trendPercent,
  trendDirection,
  items,
  bgColor,
  borderColor,
  trendColor,
}) => (
  <div className={cn(`col-span-1 ${bgColor} rounded-lg p-6 border-l-4 ${borderColor}`, layoutConfig[id])}>
    {/* Header */}
    <div className="flex items-center gap-2 mb-4">
      {Icon && <Icon className="w-5 h-5" />}
      <h3 className="text-gray-600 text-sm font-medium">
        {title}==={actualPosition}
      </h3>
    </div>

    {/* Main Value */}
    <div className="mb-4">
      <div className="text-4xl font-bold text-gray-900 mb-2">{mainValue}</div>
      <div className={`flex items-center gap-1 text-sm font-semibold ${trendColor}`}>
        {trendDirection === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
        <span>{trendPercent}</span>
        <span className="text-gray-500 font-normal">vs last period</span>
      </div>
    </div>

    {/* Items List */}
    <div className="space-y-2 mb-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{item.label}</span>
          <span className={`px-2 py-1 rounded text-white text-xs font-semibold ${item.badgeColor}`}>{item.value}</span>
        </div>
      ))}
    </div>

    {/* View Details Link */}
    <button className={`text-sm font-medium ${trendColor} hover:underline cursor-pointer`}>View Details →</button>
  </div>
);

const statsData = [
  {
    id: 1,
    actualPosition: 1,
    title: 'Total Applications',
    mainValue: '2,847',
    trendPercent: '+12.5%',
    trendDirection: 'up',
    trendColor: 'text-green-600',
    icon: CheckCircle,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    items: [
      { label: 'New', value: '464', badgeColor: 'bg-blue-500' },
      { label: 'Drafted', value: '234', badgeColor: 'bg-blue-500' },
      { label: 'Confirmed', value: '891', badgeColor: 'bg-blue-500' },
    ],
  },
  {
    id: 2,
    actualPosition: 2,
    title: 'In Process',
    mainValue: '856',
    trendPercent: '+18.2%',
    trendDirection: 'up',
    trendColor: 'text-yellow-600',
    icon: Clock,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    items: [
      { label: 'Document Review', value: '312', badgeColor: 'bg-yellow-500' },
      { label: 'Interview Stage', value: '287', badgeColor: 'bg-yellow-500' },
      { label: 'Final Decision', value: '257', badgeColor: 'bg-yellow-500' },
    ],
  },
  {
    id: 3,
    actualPosition: 3,
    title: 'Approved',
    mainValue: '1,628',
    trendPercent: '+13.3%',
    trendDirection: 'up',
    trendColor: 'text-green-600',
    icon: CheckCircle,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    items: [
      { label: 'Tourist', value: '645', badgeColor: 'bg-green-500' },
      { label: 'Business', value: '423', badgeColor: 'bg-green-500' },
      { label: 'Student', value: '560', badgeColor: 'bg-green-500' },
    ],
  },
  {
    id: 4,
    actualPosition: 4,
    title: 'Rejected',
    mainValue: '363',
    trendPercent: '-6.1%',
    trendDirection: 'down',
    trendColor: 'text-red-600',
    icon: XCircle,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    items: [
      { label: 'Doc Issues', value: '145', badgeColor: 'bg-red-500' },
      { label: 'Eligibility', value: '108', badgeColor: 'bg-red-500' },
      { label: 'Interview', value: '110', badgeColor: 'bg-red-500' },
    ],
  },
  {
    id: 5,
    actualPosition: 5,
    title: 'Drafted',
    mainValue: '363',
    trendPercent: '-6.1%',
    trendDirection: 'down',
    trendColor: 'text-red-600',
    icon: XCircle,
    bgColor: 'bg-gray-300',
    borderColor: 'border-red-300',
    items: [
      { label: 'Doc Issues', value: '145', badgeColor: 'bg-red-500' },
      { label: 'Eligibility', value: '108', badgeColor: 'bg-red-500' },
      { label: 'Interview', value: '110', badgeColor: 'bg-red-500' },
    ],
  },
  // {
  //   id: 6,
  //   actualPosition: 6,
  //   title: 'Rejected3',
  //   mainValue: '363',
  //   trendPercent: '-6.1%',
  //   trendDirection: 'down',
  //   trendColor: 'text-red-600',
  //   icon: XCircle,
  //   bgColor: 'bg-lime-50',
  //   borderColor: 'border-red-300',
  //   items: [
  //     { label: 'Doc Issues', value: '145', badgeColor: 'bg-red-500' },
  //     { label: 'Eligibility', value: '108', badgeColor: 'bg-red-500' },
  //     { label: 'Interview', value: '110', badgeColor: 'bg-red-500' },
  //   ],
  // },
];

const LayoutPractice = () => {
  // Swap data of card 3 and card 5 - keeps layout same
  const displayData = getSwappedData(statsData, 2, 5);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Applications Dashboard</h1>
        <p className="text-gray-600 mt-2">Track your application statistics</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2 gap-6">
        {displayData.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default LayoutPractice;
