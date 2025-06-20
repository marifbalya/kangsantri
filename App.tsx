
import React, { useState, useContext, useEffect } from 'react';
import { Header } from './components/Header';
import { ChatView } from './components/ChatView';
import { SettingsView } from './components/SettingsView';
import { AppContext } from './contexts/AppContext';
import type { View } from './types';
import { ChatHistoryModal } from './components/ChatHistoryModal'; // Import new component

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('chat');
  const [isChatHistoryModalOpen, setIsChatHistoryModalOpen] = useState<boolean>(false); // New state for modal
  const context = useContext(AppContext);

  useEffect(() => {
    if (context && context.initialized) {
      if (context.chatSessions.length === 0) {
        // No action needed here, ChatView will show empty state
      } else if (!context.activeChatSessionId && context.chatSessions.length > 0) {
        const sortedSessions = [...context.chatSessions].sort((a,b) => new Date(b.lastUpdatedAt).getTime() - new Date(a.lastUpdatedAt).getTime());
        if (sortedSessions.length > 0) {
            context.setActiveChatSession(sortedSessions[0].id);
        }
      }
    }
  }, [context?.initialized, context?.chatSessions, context?.activeChatSessionId, context?.setActiveChatSession]);


  if (!context || !context.initialized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen" style={{backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)'}}>
        <svg className="animate-spin h-12 w-12 text-[color:var(--accent-primary)] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-lg" style={{color: 'var(--text-secondary)'}}>Initializing KangSantri AI...</p>
      </div>
    );
  }
  
  const openChatHistoryModal = () => setIsChatHistoryModalOpen(true);
  const closeChatHistoryModal = () => setIsChatHistoryModalOpen(false);

  return (
    <div className="flex flex-col h-screen max-h-screen" style={{backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)'}}>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          setCurrentView={setCurrentView} 
          onToggleChatHistory={openChatHistoryModal}
        />
        <main className="flex-grow overflow-y-auto" style={{ backgroundColor: 'var(--bg-primary)'}}>
          {currentView === 'chat' && <ChatView />}
          {currentView === 'settings' && <SettingsView setCurrentView={setCurrentView}/>}
        </main>
      </div>
      {isChatHistoryModalOpen && (
        <ChatHistoryModal
          isOpen={isChatHistoryModalOpen}
          onClose={closeChatHistoryModal}
          onSelectChat={(sessionId) => {
            context.setActiveChatSession(sessionId);
            setCurrentView('chat');
            closeChatHistoryModal();
          }}
          setCurrentView={setCurrentView} // Pass setCurrentView here
        />
      )}
    </div>
  );
};

export default App;