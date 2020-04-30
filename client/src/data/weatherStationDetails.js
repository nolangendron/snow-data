import { data } from './index';

const { littleBearData, coqSummitData, cayooshSummitData, blowDownMidData, foundationMinesData, allisonPassData, abbottData, rogersPassData } = data;

export const stationNumbers = {
  coquihalla: {
    nameLower: "Coquihalla Summit",
    elevationLower: "1220m",
    nameUpper: "Little Bear",
    elevationUpper: "1660m",
    lower: 15,
    upper: 17,
    seasonDataLower: coqSummitData,
    seasonDataUpper: littleBearData
  },
  duffey: {
    nameLower: "Cayoosh Summit",
    elevationLower: "1250m",
    nameUpper: "Blowdown Mid",
    elevationUpper: "1890m",
    lower: 74,
    upper: 20,
    seasonDataLower: cayooshSummitData,
    seasonDataUpper: blowDownMidData
  },
  manning: {
    nameLower: "Allison Pass",
    elevationLower: "1340m",
    nameUpper: "Foundation Mines",
    elevationUpper: "1650m",
    lower: 73,
    upper: 13,
    seasonDataLower: allisonPassData,
    seasonDataUpper: foundationMinesData
  },
  rogerspass: {
    nameLower: "Rogers Pass",
    elevationLower: "1315m",
    nameUpper: "Abbott",
    elevationUpper: "2130m",
    lower: 98,
    upper: 91,
    seasonDataLower: rogersPassData,
    seasonDataUpper: abbottData
  }
};