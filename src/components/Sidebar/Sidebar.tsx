import { motion } from 'framer-motion';
import React from 'react';
import SearchTab from './SearchTab';
import MainSidebar from './MainSidebar';

const Sidebar = () => {
  const [activeSearchTab, setActiveSearchTab] = React.useState(false);

  return (
    <motion.aside
      initial={{ translateX: '-400px' }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:w-[400px] bg-primary py-4 lg:py-8 overflow-hidden min-h-screen"
    >
      {activeSearchTab ? (
        <SearchTab setSearchTab={setActiveSearchTab} />
      ) : (
        <MainSidebar setSearchTab={setActiveSearchTab} />
      )}
    </motion.aside>
  );
};

export default Sidebar;
