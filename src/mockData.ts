import { Trip } from "./App";

const mockData: Trip[] = [
    {
        "source": "MOBIFACIL",
        "tripType": "ONE_WAY",
        "totalMiles": "14278",
        "totalMoney": "0.0",
        "date": "2023-03-17T19:03:12.296",
        "orderId": "13336750",
        "status": "PROCESSED",
        "segments": [
            {
                "busType": "CONVENCIONAL",
                "segment": "SEGMENT_1",
                "refundable": "false",
                "stops": "0",
                "legs": [
                    {
                        "busClass": "CONVENCIONAL",
                        "busCompanyCode": "3",
                        "busCompanyName": "EXPRESSO UNIAO LTDA",
                        "arrivalBusStationCode": "7453",
                        "departureBusStationCode": "21787",
                        "departureDate": "2023-04-22T08:00:00Z",
                        "arrivalDate": "2023-04-22T14:04:00Z",
                        "departureCity": "SAO PAULO( TODOS)",
                        "departureState": "SP",
                        "arrivalCity": "PASSOS - MG",
                        "arrivalState": "MG",
                        "seats": [
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "RYZCSXT",
                                "seatNumber": "05",
                                "ticketNumber": "10000080794820",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "CONVENCIONAL",
                                "paxDocument": "1231231214",
                                "busPassengerId": "2",
                                "passenger": {
                                    "indexGDS": "2",
                                    "firstName": "Maria",
                                    "lastName": "Silva",
                                    "type": "CHD",
                                    "documentNumber": "1231231214",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "CONVENCIONAL",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Murilo",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "1231233",
                                    "documentType": "RG"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "LEITO COM AR",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Gabriel",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "111111",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "CONVENCIONAL",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Sara",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "222222",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "LEITO COM AR",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Carla",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "1231233",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "LEITO COM AR",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Marcos",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "1231233",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "LEITO COM AR",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Carla",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "1231233",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "LEITO COM AR",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Renato",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "1231233",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "CONVENCIONAL",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Viviane",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "124425",
                                    "documentType": "CPF"
                                }
                            },
                            {
                                "chosenCost": "miles",
                                "costMiles": "7093",
                                "busFareAmount": "90.94",
                                "costMoney": "0",
                                "recordLocator": "VIKCSVF",
                                "seatNumber": "04",
                                "ticketNumber": "10000080794821",
                                "partnerTransactionId": "eyJhbGciOiJIUzI1NiJ9",
                                "serviceId": "380943",
                                "bookingClass": "CONVENCIONAL",
                                "paxDocument": "1231233",
                                "busPassengerId": "1",
                                "passenger": {
                                    "indexGDS": "1",
                                    "firstName": "Vinicius",
                                    "lastName": "Silva",
                                    "type": "ADT",
                                    "documentNumber": "124425",
                                    "documentType": "CPF"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
];

export default mockData;
