import React from 'react'
import LoadingPage from '../../../LoadingPage'
import HistoryTable from './HistoryTable'

const ProfileHistory = ({  loading, client }) => {
    console.log('profile history', history)
    return loading ? <LoadingPage /> : (
        <div>
            <h1>Histórico de compras</h1>
            <HistoryTable client_id={client._id} loading={loading} history={client.history} />
        </div>
    )
}

export default ProfileHistory
