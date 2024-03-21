import React, { useState, ChangeEvent } from 'react';
import './App.css';
import mockData from "./mockData";

export interface Trip {
  source: string;
  tripType: string;
  totalMiles: string;
  totalMoney: string;
  date: string;
  orderId: string;
  status: string;
  segments: Segment[];
}

interface Segment {
  busType: string;
  segment: string;
  refundable: string;
  stops: string;
  legs: Leg[];
}

interface Leg {
  busClass: string;
  busCompanyCode: string;
  busCompanyName: string;
  arrivalBusStationCode: string;
  departureBusStationCode: string;
  departureCity: string;
  departureState: string;
  arrivalCity: string;
  arrivalState: string;
  departureDate: string;
  arrivalDate: string;
  seats: Seat[];
}

interface Seat {
  chosenCost: string;
  costMiles: string;
  busFareAmount: string;
  costMoney: string;
  recordLocator: string;
  seatNumber: string;
  ticketNumber: string;
  partnerTransactionId: string;
  serviceId: string;
  bookingClass: string;
  paxDocument: string;
  busPassengerId: string;
  passenger: Passenger;
}

interface Passenger {
  indexGDS: string;
  firstName: string;
  lastName: string;
  type: string;
  documentNumber: string;
  documentType: string;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData: Trip[] = mockData.filter((trip: Trip) =>
    trip.segments.some((segment: Segment) =>
      segment.legs.some((leg: Leg) =>
        leg.seats.some((seat: Seat) =>
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
          {filteredData.map((trip: Trip, tripIndex: number) =>
            trip.segments.map((segment: Segment, segmentIndex: number) =>
              segment.legs.map((leg: Leg, legIndex: number) =>
                leg.seats.filter((seat: Seat) =>
                  `${seat.passenger.firstName} ${seat.passenger.lastName}`
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ).map((seat: Seat, seatIndex: number) => (
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
