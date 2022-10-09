const chart_box = document.querySelector(".chart_box");

var chart_html = "";
var max_index = 0;

data.forEach(function (each_data, index) {
  if (each_data.amount > data[max_index].amount) max_index = index;
});

function calculate_height(amount) {
  return (amount * 120) / data[max_index].amount;
}

data.forEach(function (each_data, index) {
  chart_html += '<div class="col_box">';
  chart_html += '<div class="column">';
  chart_html += '<span class="title">$' + each_data.amount + "</span>";

  chart_html += '<span class="col_bar ';

  if (index == max_index) chart_html += "max";

  chart_html +=
    '"style = "height:' + calculate_height(each_data.amount) + 'px"></span>';

  chart_html += "</div>";

  chart_html += '<span class="day">' + each_data.day + "</span>";

  chart_html += "</div>";
});

chart_box.innerHTML = chart_html;
