$(document).ready(() => {
  $("#example").DataTable({
    ajax: {
      url: "./data/01-usuarios.json",
      dataSrc: function (json) {
        return json;
      },
    },
    searching: true,
    paging: false,
    info: false,
    stateSave: false,
    language: {
      searchPlaceholder: "Buscar...",
      search: "",
    },
    scrollY: "60vh",
    "createdRow": function (row, data, dataIndex) {
      console.log(data.Usuario)
        if (data.Chage == "El Password no expira") {
          $(row).addClass('green');
        } else {
          $(row).addClass('red');
        }
      },
    columns: [
      { data: "Host" },
      { data: "IP" },
      { data: "Usuario" },
      { data: "Chage" },
      { data: "Dias" }
    ],
    order: [[0, "asc"]],
  });
});