function createCalendar(id, year, month) {
  var container = document.getElementById(id),
  currentMonth = month - 1,
  currentDate = new Date(year, currentMonth),
  table = '<table><thead><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></thead><tbody><tr>';
  for (var i = 0; i < getDay(currentDate); i++) {
    table += '<td></td>';
  }

  while (currentDate.getMonth() == currentMonth) {
        table += '<td>' + currentDate.getDate() + '</td>';
        if (getDay(currentDate) % 7 == 6) {
          table += '</tr><tr>';
        }
        currentDate.setDate(currentDate.getDate() + 1);
  }

  if (getDay(currentDate) != 0) {
      for (var i = getDay(currentDate); i < 7; i++) {
        table += '<td></td>';
      }
  }
  table += '</tr></tbody></table>';

  container.innerHTML = table;
}

function getDay(date) {
  var day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

createCalendar("calendar", 2013, 9);

