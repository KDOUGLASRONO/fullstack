import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './pages/landing';
import Layout from './pages/layout';
import Register from './pages/signup';
import Login from './pages/login';
import WalletLayout from './wallet/wlayout';
import Details from './wallet/details';
import Bills from './wallet/bills';
import Withdraw from './wallet/withdraw';
import Savings from './wallet/savings';
import Transactions from './wallet/transactions';
//IMPORTS ADMIN PAGES
import AdminLayout from './admin/adminLayout';
import AdminBills from './admin/bills';
import Dashboard from './admin/dashboard';
import Merchants from './admin/merchants';
import Request from './admin/pendingRequest';
import AdminTransactions from './admin/transactions';
import Users from './admin/users';
import Verify from './admin/verify';
import Withdrawals from './admin/withdrawals';



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>}/>
          <Route element={<Layout/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
          <Route element={<WalletLayout/>}>
            <Route path="/details" element={<Details/>}/>
            <Route path="/bills" element = {<Bills/>}/>
            <Route path="/savings" element={<Savings/>}/>
            <Route path="/withdraw" element={<Withdraw/>}/>
            <Route path="/transactions" element={<Transactions/>}/>
          </Route>
          <Route element = {<AdminLayout/>}>
            <Route path="/admin/dashboard" element={<Dashboard/>}/>
            <Route path="/admin/request" element={<Request/>}/>
            <Route path="/admin/merchants" element={<Merchants/>}/>
            <Route path="/admin/transactions" element={<AdminTransactions/>}/>
            <Route path="/admin/users" element={<Users/>}/>
            <Route path="/admin/verify" element={<Verify/>}/>
            <Route path="/admin/bills" element={<AdminBills/>}/>
            <Route path="/admin/withdrawals" element={<Withdrawals/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
