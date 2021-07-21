import Modal from 'react-modal';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </>
  );
}
//É possível passar uma função de um componente pai para um componente filho através de uma props

