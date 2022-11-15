
import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"  />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#051</td>
                            <td className="show576">10/11/2022</td>
                            <td className="show992">7</td>
                            <td className="show992">6</td>
                            <td>Marcio</td>
                            <td>R$ 98000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    
                                <NotificationButton />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#076</td>
                            <td className="show576">10/11/2022</td>
                            <td className="show992">11</td>
                            <td className="show992">6</td>
                            <td>Marcia</td>
                            <td>R$ 104000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    
                                <NotificationButton />

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#085</td>
                            <td className="show576">10/11/2022</td>
                            <td className="show992">9</td>
                            <td className="show992">3</td>
                            <td>Marcelo</td>
                            <td>R$ 111000,00</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    
                                    <NotificationButton />

                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>



        </div>
    )



}

export default SalesCard
