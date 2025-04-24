import React from 'react';

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (tabId: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  className = ''
}) => {
  return (
    <div className={`mb-6 ${className}`}>
      <div className="flex border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`
              py-2 px-4 text-sm font-medium transition-all duration-200
              ${activeTab === tab.id 
                ? 'text-[#6a11cb] border-b-2 border-[#6a11cb]' 
                : 'text-gray-400 hover:text-white'}
            `}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
