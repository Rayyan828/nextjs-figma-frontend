// pages/index.tsx

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import AccountProgress from '@/components/AccountProgress';
import FranchiseeCard from '@/components/FranchiseeCard';
import KeyInsightsCard from '@/components/KeyInsightsCard';
import FinancialCard from '@/components/FinancialCard';
import LeadsCard from '@/components/LeadsCard';
import PendingQuestions from '@/components/PendingQuestions';
import ChatAssistant from '@/components/ChatAssistant';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Main content area */}
      <main className="flex-1 gap-1 overflow-auto bg-white">
        {/* Top bar with avatar */}
        <Header />

        {/* 1st row: Progress | Franchisee | Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 mr-3 ml-3">
          {/* Col 1: spans both rows */}
          <div className="md:row-span-2">
            <AccountProgress />
          </div>

          {/* Col 2, Row 1 */}
          <div>
            <FranchiseeCard />
          </div>

          {/* Col 3, Row 1 */}
          <div>
            <KeyInsightsCard />
          </div>

          {/* Col 2, Row 2 */}
          <div>
            <FinancialCard />
          </div>

          {/* Col 3, Row 2 */}
          <div>
            <LeadsCard />
          </div>
        </div>

        {/* 3rd row: Pending Questions | Chat Assistant */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="md:col-span-1 bg-gray-100">
            <PendingQuestions />
          </div>
          <div className="md:col-span-2 bg-gray-100">
            <ChatAssistant />
          </div>
        </div>
      </main>
    </div>
  );
}
