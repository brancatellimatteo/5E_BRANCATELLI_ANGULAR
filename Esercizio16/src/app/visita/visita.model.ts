export class Visita{
  nome: string;
  cognome: string;
  indirizzo: string;
  telefono: string;
  email: string;
  dataPrenotazione: string;
  oraPrenotazione: string;

  constructor(nome: string, cognome: string, indirizzo: string, telefono: string, email: string, dataPrenotazione: string, oraPrenotazione: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
    this.email = email;
    this.dataPrenotazione = dataPrenotazione;
    this.oraPrenotazione = oraPrenotazione;
  }
}
