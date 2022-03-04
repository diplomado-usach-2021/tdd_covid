const weekDayArray = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES'];
const weekendDayArray = ['SABADO', 'DOMINGO']

const covid40OK = ['SANTIAGO','MAIPU','RANCAGUA','VALPARAISO','COQUIMBO']
const covid40 = ['RENGO', 'TALCA', 'SAN FRANCISCO', 'PUNTA ARENAS']

function calculateOption(hr, place, weekDay) {
    if(hr < 0 || hr > 23) { // is a real hr
      return false
    }

    if(hr < 5){ // is a valid permission hr
      return false
    }

    if(weekendDayArray.includes(weekDay) === true){
      return false
    }

    if(covid40OK.includes(place) === true){
      return false
    }

    return true;
  }
  export default calculateOption
