import { defineStore } from "pinia";
import axios from "axios";
import { responseClients, responseLoans } from "src/helpers/data-source";

export const useClientStore = defineStore("clientStore", {
  state: () => ({
    sidePage: false,
    clients: responseClients, //testing
    clientSelectedRecord: null,
    loans: responseLoans, //testing
  }),
  getters: {
    getClient(state) {
      state.clients;
    },
    getClients(state) {
      var fieldsTableDisplay = ["client_code", "customer_name"];
      return this.getDisplay(fieldsTableDisplay, this.getClientColumns, state.clients.items);
    },
    getClientColumns(state) {
      return this.getDetails(state.clients.columns);
    },
    getLoans(state) {
      var fieldsTableDisplay = ["pnnumber", "maturity_date", "pbalance"];
      return this.getDisplay(fieldsTableDisplay, this.getLoanColumns, state.loans.items);
    },
    getLoanColumns(state) {
      return this.getDetails(state.loans.columns);
    },
  },
  actions: {
    getDisplay(fieldsToDisplay, details, items) {
      var filteredColumns = details.filter((item) => fieldsToDisplay.includes(item.field));
      var display = {
        columns: filteredColumns,
        items: items,
      };
      return display;
    },
    getDetails(columns) {
      var cleanColumns = columns.map((column) => ({
        name: column,
        label: column.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        field: column,
        align: "left",
      }));
      return cleanColumns;
    },
  },
});
