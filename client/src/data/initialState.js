export const initialState = {
  area: {
    name: ""
  },
  stations: {
    lowerStationName: "",
    lowerStationElevation: "",
    upperStationName: "",
    upperStationElevation: "",
  },
  temperature: {
    lowerStationTemp: null,
    upperStationTemp: null
  },
  snow: {
    lowerStationLastDay: null,
    lowerStationLastTwoDay: null,
    lowerStationLastWeek: null,
    upperStationLastDay: null,
    upperStationLastTwoDay: null,
    upperStationLastWeek: null,
  },
  historicSnowData: {
    data: {
      labels: [],
      datasets: [
        { label: "", fill: false, backgroundColor: "", data: [] },
        { label: "", fill: false, backgroundColor: "", data: [] }
      ]
    }
  }
};