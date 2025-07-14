import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const { t } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('aiGreeting'),
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (inputValue.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        isUser: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);
      setInputValue('');

      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);

      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: t('aiResponse'),
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 96) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-white/10 p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-center mb-6 pb-4 border-b border-white/20 dark:border-white/10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
          </div>
          <div>
            <h3 className="font-bold text-white">Assistant IA Festival</h3>
            <p className="text-sm text-white/70">En ligne • Prêt à t'aider</p>
          </div>
        </div>
      </div>

      <div className="h-80 overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} group`}
          >
            <div className={`flex items-start space-x-2 max-w-[85%] transform transition-all duration-300 hover:scale-[1.02] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                message.isUser 
                  ? 'bg-gray-600 dark:bg-gray-500' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse'
              }`}>
                {message.isUser ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>
              <div
                className={`px-4 py-3 rounded-2xl max-w-full break-words transition-all duration-300 group-hover:shadow-md ${
                  message.isUser
                    ? 'bg-white text-black group-hover:bg-gray-100'
                    : 'bg-white/10 text-white group-hover:bg-white/20'
                }`}
                style={{
                  wordWrap: 'break-word',
                  overflowWrap: 'break-word',
                  whiteSpace: 'pre-wrap'
                }}
              >
                <p className="text-sm">{message.text}</p>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex items-center space-x-3">
        <div className="flex flex-1 items-center space-x-2">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chatPlaceholder')}
            className="w-full px-4 py-3 border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 text-white rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm min-h-12 max-h-24 transition-all duration-200"
            style={{ 
              lineHeight: '1.5',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              overflowY: 'auto'
            }}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="h-12 w-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex-shrink-0 flex items-center justify-center transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
