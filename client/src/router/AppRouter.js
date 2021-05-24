import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CashFlow from '../components/cashflow/CashFlow';
import Storage from '../components/dashboard/Storage'

import { ToastContainer } from 'react-toastify'
import StorageHistory from '../components/history/StorageHistory';


import SideBar from '../components/layout/SideBar';
import Client from '../components/client/Client';
import AddClient from '../components/client/AddClient';

import EditClient from '../components/client/EditClient';
import Profile from '../components/client/profile/Profile';
import Bills from '../components/bills/Bills';
import AddBill from '../components/bills/AddBill';
import EditBill from '../components/bills/EditBill';
import Footer from '../components/layout/footer/Footer';






const AppRouter = () => {



   
    return(
    <Router >
        
        <Fragment>
        <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
        <SideBar />
       
           
            
  
                <Switch>
              
                    <Route exact path="/" component={Storage} />
                    <Route exact path="/cashflow" component={CashFlow} />
                    <Route exact path="/client" component={Client} />
                    <Route exact path="/update-client/:id" component={EditClient} />
                    <Route exact path="/add-client"  component={AddClient} />
                    <Route exact path="/storage-history" component={StorageHistory} />
                    <Route exact path="/history/:id" component={Profile} />
                    <Route exact path="/bills" component={Bills} />
                    <Route exact path="/add-bill" component={AddBill} />
                    <Route exact path="/edit-bill/:id" component={EditBill} />
                </Switch >
                <Footer />
       

        </Fragment>


    </Router>
)
    };

export default AppRouter;
