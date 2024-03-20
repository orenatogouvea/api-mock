import React, { useState } from 'react';
import './App.css';
import mockData from './mockData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = mockData.filter((trip) =>
    trip.segments.some((segment) =>
      segment.legs.some((leg) =>
        leg.seats.some((seat) =>
          `${seat.passenger.firstName} ${seat.passenger.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
      )
    )
  );

  return (
    <div className="App">
      <h1>Informações de Viagem</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Número do Documento</th>
            <th>Data de Partida</th>
            <th>Data de Chegada</th>
            <th>Cidade de Partida</th>
            <th>Cidade de Chegada</th>
            <th>ID do Pedido</th>
            <th>ID da Transação do Parceiro</th>
            <th>Número do Bilhete</th>
            <th>Data</th>
            <th>Nome da Companhia de Ônibus</th>
            <th>Classe de Reserva</th>
            <th>Custo do Assento em Milhas</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((trip, tripIndex) =>
            trip.segments.map((segment, segmentIndex) =>
              segment.legs.map((leg, legIndex) =>
                leg.seats.filter((seat) =>
                  `${seat.passenger.firstName} ${seat.passenger.lastName}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ).map((seat, seatIndex) => (
                  <tr key={`${tripIndex}-${segmentIndex}-${legIndex}-${seatIndex}`}>
                    <td>{seat.passenger.firstName} {seat.passenger.lastName}</td>
                    <td>{seat.passenger.documentNumber}</td>
                    <td>{leg.departureDate}</td>
                    <td>{leg.arrivalDate}</td>
                    <td>{leg.departureCity}</td>
                    <td>{leg.arrivalCity}</td>
                    <td>{trip.orderId}</td>
                    <td>{seat.partnerTransactionId}</td>
                    <td>{seat.ticketNumber}</td>
                    <td>{trip.date}</td>
                    <td>{leg.busCompanyName}</td>
                    <td>{seat.bookingClass}</td>
                    <td>{seat.costMiles}</td>
                  </tr>
                ))
              )
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
