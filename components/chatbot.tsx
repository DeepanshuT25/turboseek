'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import InputArea from './InputArea'
import Hero from './Hero'
import Header from './Header'
import Footer from './Footer'
import Answer from './Answer'
import Sources from './Sources'
import SimilarTopics from './SimilarTopics'

export default function Chatbot() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showHero, setShowHero] = useState(true)
  const [answer, setAnswer] = useState('')
  const [sources, setSources] = useState([])
  const [similarQuestions, setSimilarQuestions] = useState([])

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return

    setMessages(prev => [...prev, { type: 'user', content: inputValue }])
    setInputValue('')
    setIsLoading(true)
    setShowHero(false)

    // Simulating API calls
    setTimeout(() => {
      setAnswer('This is a sample response from the chatbot.')
      setSources([
        { name: 'Sample Source 1', url: 'https://example.com/1' },
        { name: 'Sample Source 2', url: 'https://example.com/2' },
      ])
      setSimilarQuestions([
        'What is artificial intelligence?',
        'How does machine learning work?',
        'What are the applications of data fusion?',
      ])
      setMessages(prev => [...prev, { type: 'bot', content: 'This is a sample response from the chatbot.' }])
      setIsLoading(false)
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
  }

  const reset = () => {
    setShowHero(true)
    setMessages([])
    setAnswer('')
    setSources([])
    setSimilarQuestions([])
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-grow relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 animate-pulse" />
        <Header />
        <main className="relative z-10 flex-1 overflow-y-auto p-4">
          {showHero ? (
            <Hero
              promptValue={inputValue}
              setPromptValue={setInputValue}
              handleDisplayResult={handleSendMessage}
            />
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                      message.type === 'user' ? 'bg-blue-600' : 'bg-gray-700'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <Answer answer={answer} />
              <Sources sources={sources} isLoading={isLoading} />
              <SimilarTopics
                similarQuestions={similarQuestions}
                handleDisplayResult={handleSuggestionClick}
                reset={reset}
              />
            </div>
          )}
        </main>
      </div>
      <footer className="relative z-10 p-4 bg-gray-900">
        <InputArea
          promptValue={inputValue}
          setPromptValue={setInputValue}
          handleDisplayResult={handleSendMessage}
          disabled={isLoading}
        />
      </footer>
      <Footer />
    </div>
  )
}